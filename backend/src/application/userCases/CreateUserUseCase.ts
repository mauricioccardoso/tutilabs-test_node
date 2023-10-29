import { hash } from "bcrypt";

import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    cpf,
    nome,
    setor,
    email,
    senha
  }: ICreateUserDTO): Promise<void> {
    let userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    userAlreadyExists = await this.usersRepository.findByCPF(cpf);

    if (userAlreadyExists) {
      throw new AppError("User with this CPF already exists");
    }

    const passwordHash = await hash(senha, 8);

    await this.usersRepository.create({
      cpf,
      nome,
      setor,
      email,
      senha: passwordHash,
    });
  }
}

export { CreateUserUseCase };
