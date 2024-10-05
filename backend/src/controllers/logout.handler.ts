import { Request, Response } from 'express';
import { sendErrorResponse } from '../utils/sendErrorResponse.util';
import logStatus from '../utils/log.util';

const logoutUserHandler = async (_: Request, res: Response) => {
    try {
        res.cookie('auth_token', '', {
            expires: new Date(0)
        })
        return res.send();
    } catch (error) {
        logStatus.error(error);
        return sendErrorResponse(res, 500, 'Something went wrong');
    }
};

export default logoutUserHandler;