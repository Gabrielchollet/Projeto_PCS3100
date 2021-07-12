import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

/* Uso Custom Repository para facilitar que novas features sejam criadas */
@EntityRepository(User)
class UsersRepositories extends Repository<User> { }

export { UsersRepositories }