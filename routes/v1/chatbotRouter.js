import { Router } from "express";
import passport from "passport";
import { chatbotList } from "../../controllers/v1/chatbotController.js";
import { debuggerMidd } from "../../utils/debugger.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.get("/list", debuggerMidd, auth, chatbotList);

export default userRouter;
