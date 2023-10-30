import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { UsersRepository } from "@infrastructure/database/typeorm/repositories/UsersRepository";
import auth from "@config/auth";


interface IRequest {
  email : string;
  senha : string;
}

interface IResponse {
  user : {
    nome : string;
    email : string;
  };
  token : string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository : UsersRepository
  ) {
  }

  async execute({ email, senha } : IRequest) : Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if(!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(senha, user.senha);

    if(!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, auth.secret_token, {
      subject: user.id,
      expiresIn: auth.expires_in_token,
    });

    const tokenReturn : IResponse = {
      user: {
        nome: user.nome,
        email: user.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
