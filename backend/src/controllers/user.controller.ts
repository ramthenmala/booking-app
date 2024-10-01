import { Request, Response } from 'express';
import UserModel from '../models/user.model';
import { generateToken, setAuthTokenCookie } from '../utils/token.util';
import { sendErrorResponse } from '../utils/sendErrorResponse.util';
import logStatus from '../utils/log.util';

const createUserController = async (req: Request, res: Response) => {

    try {
        const { email, ...rest } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return sendErrorResponse(res, 400, 'User already exists');
        }

        const newUser = new UserModel({ email, ...rest });
        await newUser.save();

        const accessToken = generateToken(newUser.id);
        setAuthTokenCookie(res, accessToken);

        return res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        logStatus.error(error);
        return sendErrorResponse(res, 500, 'Something went wrong');
    }
};

export default createUserController;
