import { Request, Response } from "express";
import { AcceptJobService } from "../services/AcceptJobService";


class AcceptJobController {
    async handle(request: Request, response: Response) {
      /* No interior do controller teremos acesso aos Requests e Responses */
      const { user_id, job_id } = request.body;
      
      const acceptJobService = new AcceptJobService();
      
      /* O Controller pega as informações do server (rota) e repassa para o seu SERVICE */
      const job = await acceptJobService.execute({ user_id, job_id });
    
      if(job != null) {
        return response.json("Job Accept!");
      }
    
      return response.json("Job Declined!")
    }
  }
  
  export { AcceptJobController }