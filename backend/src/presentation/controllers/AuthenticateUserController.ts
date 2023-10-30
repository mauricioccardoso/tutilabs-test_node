import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "@domain/useCases/jsonwebtoken/AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { senha, email } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({
      senha,
      email,
    });

    return response.json(token);
  }
}
export { AuthenticateUserController };
