import { Request, Response } from "express";
import { logger } from "../utils/logger";


const index = async (req: Request, res: Response): Promise<Response> => {

  const pessoas = [];

  for (let i = 0; i < 50; i++) {
    pessoas.push(`${i}° pessoa.`);
  }

  logger.info("List of all peoples");
  return res.json({ pessoas });
};

export { index };
