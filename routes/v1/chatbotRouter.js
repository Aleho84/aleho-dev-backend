import { Router } from "express";
import passport from "passport";
import { chatbotList, chatbotNew, chatbotDelete, chatbotUpdate } from "../../controllers/v1/chatbotController.js";
import { debuggerMidd } from "../../middlewares/debugger.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.use(debuggerMidd);

userRouter.get("/list", auth, chatbotList);
userRouter.post("/new", auth, chatbotNew);
userRouter.delete("/:chatbotId", auth, chatbotDelete);
userRouter.put("/:chatbotId", auth, chatbotUpdate);

export default userRouter;
