import { Request, Response } from "express";

import { container } from "tsyringe";
import { ListUserByCPFUseCase } from "@application/userCases/ListUserByCPFUseCase";

class ListUserByCPFController {
  async handle(request : Request, response : Response) : Promise<Response> {
    const cpf = request.params.cpf as string;

      const
    listUsersUseCase = container.resolve(ListUserByCPFUseCase);
    const user = await listUsersUseCase.execute(cpf);

    return response.json(user);
  }
}

export { ListUserByCPFController };
