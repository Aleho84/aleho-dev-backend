import { Router } from "express";
import passport from "passport";
import { chatbotList, chatbotNew } from "../../controllers/v1/chatbotController.js";
import { debuggerMidd } from "../../utils/debugger.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.get("/list", debuggerMidd, auth, chatbotList);
userRouter.post("/new", debuggerMidd, auth, chatbotNew);

export default userRouter;
