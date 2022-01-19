import { Router } from 'express';
import { logger } from '../utils/logger';

const pessoaRoutes = Router();

const pessoa = {
  name: "Marcos",
  lastName: "Raimundo",
  age: 22
}

pessoaRoutes.get("/pessoa", (req, res) => {
  logger.info(`Pessoa 1 é ${pessoa.name} ${pessoa.lastName}, com idade de ${pessoa.age}`);
  res.send(`Pessoa 1 é ${pessoa.name} ${pessoa.lastName}, com idade de ${pessoa.age}`)
})

export { pessoaRoutes };
