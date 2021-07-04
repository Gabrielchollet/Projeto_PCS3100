/* Listagem dos usuários na aplicação */
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { JobsRepositories } from "../repositories/JobsRepositories";


class ListJobService {
  async execute() {
    const jobsRepositories = getCustomRepository(JobsRepositories);

    const jobs = await jobsRepositories.find();
    /** retorna em js uma lista dos usuarios */
    return classToPlain(jobs);
  }
}

export { ListJobService }