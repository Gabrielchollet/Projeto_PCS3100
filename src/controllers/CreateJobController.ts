/* No interior do controller teremos acesso aos Requests e Responses */
/* serve para pegar as informações do server (rota) e repassar para o SERVICE */

import { Request, Response } from "express"
import { CreateJobService } from "../services/CreateJobService";

/* Diferentemente do que ocorre em server.ts, precisamos chamar outra classe que não tem acesso a variável app, é preciso definir as tipagens */
class CreateJobController {
  async handle(request: Request, response: Response) {
    /* Nessa parte precisamos recuperar os parâmetros name, email e admin de dentro da requisição */
    const { name, user_sender, user_receiver, message } = request.body;

    const createJobService = new CreateJobService();

    const job = await createJobService.execute({ name, user_sender, user_receiver, message });

    return response.json(job);
  }
}

export { CreateJobController };