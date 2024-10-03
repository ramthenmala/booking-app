import { Response } from 'express';
import { sendErrorResponse } from '../utils/sendErrorResponse.util';
import logStatus from '../utils/log.util';
import { IRequestUserId } from '../type/IRequestUserId';

const authValidateHandler = (req: IRequestUserId, res: Response) => {
    try {
        return res.status(200).json({ userId: req.userId });
    } catch (error) {
        logStatus.error(error);
        return sendErrorResponse(res, 500, 'Something went wrong');
    }
};

export default authValidateHandler;
