import { ICreateUserDTO } from "@application/DTO/ICreateUsersDTO";
import { User } from "@domain/entities/typeorm/User";

interface IUsersRepository {
  create({
    cpf,
    nome,
    setor,
    email,
    senha
  }: ICreateUserDTO): Promise<void>;

  findByEmail(email: string): Promise<User>;

  findByCPF(cpf: string): Promise<User>;

  findById(id: string): Promise<User>;

  list(setor? : string): Promise<User[]>;

  delete(id : string): Promise<void>;
}

export { IUsersRepository };
