import { Request, Response } from "express";

import { container } from "tsyringe";
import { ListUsersUseCase } from "@application/userCases/ListUsersUseCase";

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const setor = request.query.setor as string;

    const listUsersUseCase = container.resolve(ListUsersUseCase);
    const users = await listUsersUseCase.execute(setor);

    return response.json(users);
  }
}

export { ListUsersController };
