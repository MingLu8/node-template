import { NextFunction, Request, Response } from "express";

const requestLogHandler = (req: Request, res: Response, next: NextFunction) => {
    console.log(`begin handling url: ${req.url} at ${Date()}`);
    next();
    console.log(`end handling url: ${req.url} at ${Date()}`);
}

export default requestLogHandler