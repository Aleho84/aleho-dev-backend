import { Router } from "express";
import swaggerRouter from "./swaggerRoutes.js";
import usersRouter_v1 from "./v1/usersRoutes.js";

const apiRouter = Router();

apiRouter.use("/v1/docs", swaggerRouter); // La documentación siempre viene bien!
apiRouter.use("/v1/users", usersRouter_v1);

export default apiRouter;
