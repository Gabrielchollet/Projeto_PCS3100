/* Listagem dos usuários na aplicação */
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { JobsRepositories } from "../repositories/JobsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories"

class ListJobService {
  async execute(user_id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const jobsRepositories = getCustomRepository(JobsRepositories);

    const { professional } = await usersRepositories.findOne(user_id);
    const jobs = await jobsRepositories.find({
      where:{
        professional : professional,
      },
    });
    /** retorna em js uma lista dos usuarios */
    return classToPlain(jobs);
  }
}

export { ListJobService }