import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { IUserResponseDTO } from "@application/DTO/IUserResponseDTO";

@injectable()
class ListUserByCPFUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository : IUsersRepository
  ) {
  }

  async execute(cpf : string) : Promise<IUserResponseDTO> {
    const {senha, ...user } = await this.usersRepository.findByCPF(cpf);
    return user;
  }
}

export { ListUserByCPFUseCase };
