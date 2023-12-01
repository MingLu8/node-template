import { Router } from 'express';
import homeRoute from './home-route';
import systemRoutes from './system-routes';

const routes = Router();

routes.use('/', homeRoute);
routes.use('/system', systemRoutes);

export default routes;