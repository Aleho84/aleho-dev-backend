import { Router } from "express";
import passport from "passport";
import { systemInfo } from "../../controllers/v1/serverController.js";
import { debuggerMidd } from "../../utils/debugger.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.get("/systemInfo", debuggerMidd, systemInfo);

export default userRouter;
