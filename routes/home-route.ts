import { Request, Response, Router } from 'express';

const homeRoute = Router();

homeRoute.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});


export default homeRoute;