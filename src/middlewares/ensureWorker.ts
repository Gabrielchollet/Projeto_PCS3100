import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureWorker(request: Request, response: Response, next: NextFunction) {

  const { user_id } = request;
  console.log(user_id);

  const usersRepositories = getCustomRepository(UsersRepositories);

  /* A partir do id do usuario o aplicativo busca no banco de dados a propriedade worker dele */
  const { worker } = await usersRepositories.findOne(user_id);

  /* Verificar se usuário eh trabalhador */

  if (worker) {
    return next();
  }
  /* Usuário sem autorização para acessar essa rota */
  return response.status(401).json({
    error: "Unauthorized",
  });
}