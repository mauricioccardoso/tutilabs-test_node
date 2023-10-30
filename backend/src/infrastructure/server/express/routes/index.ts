import { Router } from "express";

import { usersRoutes } from "@infrastructure/server/express/routes/users.routes";
import { authenticateRoutes } from "@infrastructure/server/express/routes/authenticate.routes";

const router : Router = Router();

router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
