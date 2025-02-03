import { Router } from "express";
import passport from "passport";
import { systemInfo, systemProcess, isOnline } from "../../controllers/v1/serverController.js";
import { debuggerMidd } from "../../utils/debugger.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.get("/systemInfo", debuggerMidd, auth, systemInfo);
userRouter.get("/systemProcess", debuggerMidd, auth, systemProcess);
userRouter.post("/isOnline", debuggerMidd, auth, isOnline);

export default userRouter;
