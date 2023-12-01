import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (err: Error , req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
}

export default globalErrorHandler