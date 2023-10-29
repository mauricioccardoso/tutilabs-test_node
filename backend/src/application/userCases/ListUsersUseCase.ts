import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { User } from "@domain/entities/typeorm/User";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository : IUsersRepository
  ) {
  }

  async execute(setor? : string) : Promise<User[]> {
    const users = await this.usersRepository.list(setor);
    return users;
  }
}

export { ListUsersUseCase };
