import { Request, Response } from "express"
import { ListJobService } from "../services/ListJobsService";

class ListJobsController {
  async handle(request: Request, response: Response) {
    const listJobsService = new ListJobService();

    const jobs = await listJobsService.execute();

    return response.json(jobs);
  }
}

export { ListJobsController }