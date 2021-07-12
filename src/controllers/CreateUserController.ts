import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    /* No interior do controller teremos acesso aos Requests e Responses */
    const { name, email, admin, worker, employer, professional, password } = request.body;

    const createUserService = new CreateUserService();

    /* serve para pegar as informações do server (rota) e repassar para o SERVICE */
    const user = await createUserService.execute({ name, email, admin, worker, employer, professional, password});

    return response.json(user);
  }
}

export { CreateUserController };