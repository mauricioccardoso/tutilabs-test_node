import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "@application/userCases/CreateUserUseCase";


class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, nome, setor, email, senha } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      cpf,
      nome,
      setor,
      email,
      senha
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
