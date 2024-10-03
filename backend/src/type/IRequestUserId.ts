import { Request } from "express";

export interface IRequestUserId extends Request {
    userId?: string;
}
