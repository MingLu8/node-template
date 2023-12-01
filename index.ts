import express, { ErrorRequestHandler, Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes/routes';
import globalErrorHandler from './middlewares/global-error-middleware';
import requestLogHandler from './middlewares/request-log-handler';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(requestLogHandler)
app.use(globalErrorHandler);

app.use("media", express.static("public"))

app.use(routes)

app.listen(port, () => {
    console.log(`??[server]: Server is running at http://localhost:${port}`);
});