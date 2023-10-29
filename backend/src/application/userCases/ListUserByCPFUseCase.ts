import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { User } from "@domain/entities/typeorm/User";

@injectable()
class ListUserByCPFUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository : IUsersRepository
  ) {
  }

  async execute(cpf : string) : Promise<User> {
    const user = await this.usersRepository.findByCPF(cpf);
    return user;
  }
}

export { ListUserByCPFUseCase };
