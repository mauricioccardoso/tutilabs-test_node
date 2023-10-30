import { hash } from "bcrypt";

import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    cpf,
    nome,
    setor,
    email,
    senha
  }: ICreateUserDTO): Promise<void> {
    let user = await this.usersRepository.findById(id);

    if (! user) {
      throw new AppError("User does not exists");
    }

    if(senha) {
      senha = await hash(senha, 8);
      user.senha = senha;
    }

    user.cpf = cpf;
    user.nome = nome;
    user.setor = setor;
    user.email = email;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserUseCase };
