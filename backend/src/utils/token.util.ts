import { Response } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';

const privateKey = config.get<string>('privateKey')
const accessTokenTtl = config.get<string>('accessTokenTtl')
const maxAgeTtl = config.get<number>('maxAge')

export const generateToken = (userId: string) => {
    return jwt.sign(
        { userId: userId },
        privateKey,
        {
            algorithm: 'RS256',
            expiresIn: accessTokenTtl
        }
    );
};

export const setAuthTokenCookie = (res: Response, token: string) => {
    res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: maxAgeTtl,
    });
};