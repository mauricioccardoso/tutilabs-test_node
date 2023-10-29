import { Router } from "express";

import { CreateUserController } from "@presentation/controllers/CreateUserController";
import { ListUsersController } from "@presentation/controllers/ListUsersController";
import { ListUserByCPFController } from "@presentation/controllers/ListUserByCPFController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const listUserByCPFController = new ListUserByCPFController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);
usersRoutes.get("/:cpf", listUserByCPFController.handle);



export { usersRoutes };
