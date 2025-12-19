import { Router } from "express";
import swaggerRouter from "./swaggerRoutes.js";
import usersRouter_v1 from "./v1/usersRoutes.js";
import chatbotRouter_v1 from "./v1/chatbotRouter.js";
import serverRouter_v1 from "./v1/serverRouter.js";
import deviceRouter_v1 from "./v1/devicesRoutes.js";

const apiRouter = Router();

apiRouter.use("/v1/docs", swaggerRouter); // La documentación siempre viene bien!
apiRouter.use("/v1/users", usersRouter_v1);
apiRouter.use("/v1/chatbot", chatbotRouter_v1);
apiRouter.use("/v1/server", serverRouter_v1);
apiRouter.use("/v1/devices", deviceRouter_v1);

export default apiRouter;
