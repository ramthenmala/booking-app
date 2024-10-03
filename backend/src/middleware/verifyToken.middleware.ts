import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from 'config';
import { sendErrorResponse } from "../utils/sendErrorResponse.util";
import { IRequestUserId } from "../type/IRequestUserId";

const privateKey = config.get<string>('privateKey')

async function verifyToken(req: IRequestUserId, res: Response, next: NextFunction) {
    const token = req.cookies['auth_token']

    if (!token) {
        return sendErrorResponse(res, 401, 'Unauthorized');
    }

    try {
        const decoded = jwt.verify(token, privateKey);
        req.userId = (decoded as JwtPayload).userId;

        next();
    } catch (e: any) {
        return res.status(401).json({
            errors: e.errors || e.message || 'Validation error',
        });
    }
}

export default verifyToken;
