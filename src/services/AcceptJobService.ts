/** O empregado aceita empregos na aplicação */
import { getCustomRepository } from "typeorm";
import { JobsRepositories } from "../repositories/JobsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IJobRequest {
    user_id: string;
    job_id: string;
  }

class AcceptJobService {
    async execute({user_id, job_id} : IJobRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const jobsRepositories = getCustomRepository(JobsRepositories);
        /* o programa obtem o nome do usuario a partir do seu id */
        const { name } = await usersRepositories.findOne(user_id);
        /* o programa obtem o job a partir do id dele */
        var Job = await jobsRepositories.findOne(job_id);
        /* o programa atualiza a coluna worker do job com o nome do empregado */
        await jobsRepositories.update(Job, {worker : name,});
        /** retorna o emprego que foi aceito */
        return Job;
      }
    }
    
    export { AcceptJobService }