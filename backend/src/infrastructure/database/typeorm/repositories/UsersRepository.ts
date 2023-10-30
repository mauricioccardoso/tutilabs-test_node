import { Repository, getRepository } from "typeorm";

import { User } from "@domain/entities/typeorm/User";
import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";

class UsersRepository implements IUsersRepository {
  private repository : Repository<User>;

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
  } : ICreateUserDTO) : Promise<void> {
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

  async findByEmail(email : string) : Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findByCPF(cpf : string) : Promise<User> {
    const user = await this.repository.findOne({ cpf });
    return user;
  }

  async list(setor? : string) : Promise<User[]> {
    if(setor) {
      const usersBySetor = await this.repository.find({
        where: { setor },
        order: { nome : "ASC" },
        select: ["id", "cpf", "nome", "setor", "email", "created_at"]
      });
      return usersBySetor;
    }

    const users = await this.repository.find({
      order: { nome : "ASC" },
      select: ["id", "cpf", "nome", "setor", "email", "created_at"]
    });
    return users;
  }

  async findById(id : string) : Promise<User> {
    const user = await this.repository.findOne({ id });
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersRepository };
