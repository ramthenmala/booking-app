import { Request, Response } from "express";
import logStatus from "../utils/log.util";

const healthHandler = (_: Request, res: Response): Response | void => {
    try {
        return res.status(200).json({ status: 'OK' });
    } catch (error: any) {
        logStatus.error('Health Check Error: ', error);
        return res.status(500).json({ status: 'ERROR', message: 'Internal Server Error' });
    }
};

export default healthHandler;