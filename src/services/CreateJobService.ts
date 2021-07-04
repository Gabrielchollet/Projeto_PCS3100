import { getCustomRepository } from "typeorm"
import { JobsRepositories } from "../repositories/JobsRepositories"

interface IUserRequest {
    name: string;
    user_sender: string;
    user_receiver: string;
    message: string,
  }

class CreateJobService {
  async execute({ name, user_sender, user_receiver, message }: IUserRequest) {
    const jobsRepositories = getCustomRepository(JobsRepositories);

    /* Se não tiver o nome definido lança um excessão */
    if (!name) {
      throw new Error("Incorrect name!");
    }

    /* Criação de uma referência da job no repositorio */
    const job = jobsRepositories.create({
      name,
      user_sender,
      user_receiver,
      message,
    });

    await jobsRepositories.save(job);

    return job;
  }
}

export { CreateJobService };