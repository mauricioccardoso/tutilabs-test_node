import { Column, CreateDateColumn, PrimaryColumn, Entity } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { IUser } from "@domain/entities/Iuser";

@Entity("users")
class User implements IUser{
  @PrimaryColumn()
  id?: string;

  @Column()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  setor: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
