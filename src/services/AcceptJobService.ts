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
    
        const { name } = await usersRepositories.findOne(user_id);
        var Job = await jobsRepositories.findOne(job_id);
        await jobsRepositories.update(Job, {worker : name,});
        /** retorna em js uma lista dos usuarios */
        return Job;
      }
    }
    
    export { AcceptJobService }