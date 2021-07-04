import { getCustomRepository } from "typeorm"
import { JobsRepositories } from "../repositories/JobsRepositories"

interface IUserRequest {
    employer: string;
    worker: string;
    professional: string;
    geolocation: string;
    message: string;
    date: Date;
  }

class CreateJobService {
  async execute({ employer, worker, professional, geolocation, message, date }: IUserRequest) {
    const jobsRepositories = getCustomRepository(JobsRepositories);

    /* Criação de uma referência da job no repositorio */
    const job = jobsRepositories.create({
      employer,
      worker, 
      professional, 
      geolocation, 
      message, 
      date
    });

    await jobsRepositories.save(job);

    return job;
  }
}

export { CreateJobService };