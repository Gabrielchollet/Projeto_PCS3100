import { Request, Response } from "express";
import { ListUserService } from "../services/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response) {
    /* Nessa rota nao eh necessaria nenhuma informação no corpo da requisição */
    const listUsersService = new ListUserService();

    const users = await listUsersService.execute();
    return response.json(users);
  }
}

export { ListUsersController };