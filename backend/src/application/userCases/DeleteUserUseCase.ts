import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository : IUsersRepository
  ) {
  }

  async execute(id : string) : Promise<void> {
    let user = await this.usersRepository.findById(id);

    if (! user) {
      throw new AppError("User does not exists");
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUserUseCase };
