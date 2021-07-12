import { EntityRepository, Repository } from "typeorm";
import { Job } from "../entities/Job";

/* Uso Custom Repository para facilitar que novas features sejam criadas */
@EntityRepository(Job)
class JobsRepositories extends Repository<Job> { }

export { JobsRepositories }