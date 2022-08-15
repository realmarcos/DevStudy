import { pessoasRoutes } from './pessoasRoutes';
import { Router } from 'express';

const routes = Router();

routes.use(pessoasRoutes);
export default routes;
