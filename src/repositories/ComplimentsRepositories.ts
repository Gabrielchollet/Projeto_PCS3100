import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";

/* Uso Custom Repository para facilitar que novas features sejam criadas */
@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> { }

export { ComplimentsRepositories };