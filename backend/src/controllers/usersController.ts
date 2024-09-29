import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import User from '../models/user';
import { generateToken, setAuthTokenCookie } from '../utils/tokenUtils';
import { sendErrorResponse } from '../utils/errorUtils';

const usersController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendErrorResponse(res, 400, 'Invalid input data');
    }

    const { email, ...rest } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return sendErrorResponse(res, 400, 'User already exists');
        }

        const newUser = new User({ email, ...rest });
        await newUser.save();

        const token = generateToken(newUser.id);
        setAuthTokenCookie(res, token);

        return res.status(200).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, 'Something went wrong');
    }
};

export default usersController;
