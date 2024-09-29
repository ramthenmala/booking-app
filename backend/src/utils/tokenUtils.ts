import { Response } from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (userId: string) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: '1d' }
    );
};

export const setAuthTokenCookie = (res: Response, token: string) => {
    res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 86400000,
    });
};