import { Request, Response } from "express"
import { CreateJobService } from "../services/CreateJobService";

class CreateJobController {
  async handle(request: Request, response: Response) {
    /* No interior do controller teremos acesso aos Requests e Responses */
    const { user_id , worker, professional, geolocation, message, date } = request.body;

    const createJobService = new CreateJobService();

    /* O Controller pega as informações do server (rota) e repassa para o seu SERVICE */
    const job = await createJobService.execute(user_id, {worker, professional, geolocation, message, date });

    return response.json(job);
  }
}

export { CreateJobController };