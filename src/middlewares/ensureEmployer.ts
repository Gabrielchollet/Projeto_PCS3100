import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureEmployer(request: Request, response: Response, next: NextFunction) {

  const { user_id } = request;
  console.log(user_id);

  const usersRepositories = getCustomRepository(UsersRepositories);

  const { employer } = await usersRepositories.findOne(user_id);

  /* Verificar se usuário eh empregador */

  if (employer) {
    return next();
  }
  /* Usuário sem autorização para acessar essa rota */
  return response.status(401).json({
    error: "Unauthorized",
  });
}