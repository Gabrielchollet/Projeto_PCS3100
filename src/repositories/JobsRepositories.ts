import { EntityRepository, Repository } from "typeorm";
import { Job } from "../entities/Job";

@EntityRepository(Job)
class JobsRepositories extends Repository<Job> { }

export { JobsRepositories }