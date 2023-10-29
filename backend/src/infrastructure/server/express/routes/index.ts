import { Router } from "express";

import { usersRoutes } from "@infrastructure/server/express/routes/users.routes";

const router : Router = Router();

router.use("/users", usersRoutes);

export { router };
