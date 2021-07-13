/* Listagem dos empregos na aplicação */
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { JobsRepositories } from "../repositories/JobsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListJobService {
  async execute(user_id: string) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const jobsRepositories = getCustomRepository(JobsRepositories);
    /* a partir do id do usuario o aplicativo obtem a profissao dele*/
    const { professional } = await usersRepositories.findOne(user_id);
    /* aplicativo procura os empregos com a profissao do empregado
     e que não foram aceitos ainda(worker : null) */
    const jobs = await jobsRepositories.find({
      where:[{
        professional : professional,
      },
      {
        worker : null,
      },
    ],
    });
    /** retorna em js uma lista dos empregos que precisem da sua profissao*/
    return classToPlain(jobs);
  }
}

export { ListJobService }