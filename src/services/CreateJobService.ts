import { getCustomRepository } from "typeorm"
import { JobsRepositories } from "../repositories/JobsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    worker?: string;
    professional: string;
    geolocation: string;
    message: string;
    date: Date;
  }

class CreateJobService {
  async execute(user_id: string, {worker = null, professional, geolocation, message, date }: IUserRequest) {
    const jobsRepositories = getCustomRepository(JobsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const { name } = await usersRepositories.findOne(user_id);
    const employer = name;
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