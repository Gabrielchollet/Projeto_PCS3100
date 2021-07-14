import { Request, Response } from "express"
import { ListJobService } from "../services/ListJobsService";

class ListJobsController {
  async handle(request: Request, response: Response) {
    const { user_id }  = request;
    
    /* No interior do controller teremos acesso aos Requests e Responses */
    const listJobsService = new ListJobService();

    /* O Controller pega as informações do server (rota) e repassa para o seu SERVICE */
    const jobs = await listJobsService.execute(user_id);

    return response.json(jobs);
  }
}

export { ListJobsController }