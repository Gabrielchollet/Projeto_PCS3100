import { Request, Response } from "express"
import { ListJobService } from "../services/ListJobsService";

class ListJobsController {
  async handle(request: Request, response: Response) {
    const { user_id }  = request;

    const listJobsService = new ListJobService();

    const jobs = await listJobsService.execute(user_id);

    return response.json(jobs);
  }
}

export { ListJobsController }