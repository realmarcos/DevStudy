import { pessoaRoutes } from './pessoaRoutes';
import { Router } from 'express';

const routes = Router();

routes.use(pessoaRoutes);
export default routes;
