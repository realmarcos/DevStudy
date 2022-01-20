import { Router } from 'express';
import * as controllerPessoas from '../controllers/controllerPessoas';
;


const pessoasRoutes = Router();

pessoasRoutes.get("/pessoas", controllerPessoas.index);

export { pessoasRoutes };
