import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "@application/userCases/DeleteUserUseCase";


class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id as string;

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    await deleteUserUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DeleteUserController };
