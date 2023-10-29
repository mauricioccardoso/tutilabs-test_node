import { container } from "tsyringe";

import { IUsersRepository } from "@domain/repositories/IUsersRepository";
import { UsersRepository } from "@infrastructure/database/typeorm/repositories/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);