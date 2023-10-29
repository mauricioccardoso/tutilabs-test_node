import { Repository, getRepository } from "typeorm";

import { User } from "@domain/entities/typeorm/User";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id,
    cpf,
    nome,
    setor,
    email,
    senha
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      cpf,
      nome,
      setor,
      email,
      senha
    });
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findByCPF(cpf : string) : Promise<User> {
    const user = await this.repository.findOne({ cpf });
    return user;
  }
}
export { UsersRepository };
