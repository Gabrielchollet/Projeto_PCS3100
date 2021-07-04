/* Listagem dos usuários na aplicação */
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();
    /** retorna em js uma lista dos usuarios */
    return classToPlain(users);
  }
}

export { ListUserService }