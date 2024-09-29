import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import User from '../models/user';
import { generateToken, setAuthTokenCookie } from '../utils/tokenUtils';
import { sendErrorResponse } from '../utils/errorUtils';

const authController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return sendErrorResponse(res, 400, 'Invalid input data');
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return sendErrorResponse(res, 400, 'Invalid Credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return sendErrorResponse(res, 400, 'Invalid Credentials');
        }

        const token = generateToken(user.id);
        setAuthTokenCookie(res, token);

        return res.status(200).json({ userId: user._id });

    } catch (error) {
        console.error(error);
        return sendErrorResponse(res, 500, 'Something went wrong');
    }
};

export default authController;
