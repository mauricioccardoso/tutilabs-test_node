import { Router } from "express";

import { CreateUserController } from "@presentation/controllers/CreateUserController";
import { ListUsersController } from "@presentation/controllers/ListUsersController";
import { ListUserByCPFController } from "@presentation/controllers/ListUserByCPFController";
import { UpdateUserController } from "@presentation/controllers/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const listUserByCPFController = new ListUserByCPFController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/:cpf", listUserByCPFController.handle);
usersRoutes.put("/", updateUserController.handle);

export { usersRoutes };
