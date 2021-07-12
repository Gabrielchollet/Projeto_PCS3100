import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    /* No interior do controller teremos acesso aos Requests e Responses */
    const authenticateUserService = new AuthenticateUserService();

    /* O Controller pega as informações do server (rota) e repassa para o seu SERVICE */
    const token = await authenticateUserService.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateUserController }