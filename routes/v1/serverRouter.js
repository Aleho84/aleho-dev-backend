import { Router } from "express";
import passport from "passport";
import { systemInfo, systemProcess, isOnline } from "../../controllers/v1/serverController.js";
import { debuggerMidd } from "../../middlewares/debugger.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.use(debuggerMidd);

userRouter.get("/systemInfo", auth, systemInfo);
userRouter.get("/systemProcess", auth, systemProcess);
userRouter.post("/isOnline", auth, isOnline);

export default userRouter;
