import { Request, Response, Router } from 'express';

const systemRoutes = Router();

//app.all(), which will be called in response to any HTTP method
systemRoutes.all("/ping", (request: Request, response: Response) => {
  return response.json(Date());
});

systemRoutes.all("/test-error",(request: Request, response: Response) => {
  throw new Error("test error.")
});


export default systemRoutes;