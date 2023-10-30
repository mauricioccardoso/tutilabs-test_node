import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { IUserResponseDTO } from "@application/DTO/IUserResponseDTO";
import { AppError } from "@shared/errors/AppError";

@injectable()
class ListUserByCPFUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository : IUsersRepository
  ) {
  }

  async execute(cpf : string) : Promise<IUserResponseDTO> {
    const user = await this.usersRepository.findByCPF(cpf);

    if (! user) {
      throw new AppError("User does not exists");
    }

    const {senha, ...userFormatted } = user;
    return userFormatted;
  }
}

export { ListUserByCPFUseCase };
