import { Router } from "express";
import passport from "passport";
import { usersSignin, usersLogin, usersDelete, usersList, usersActivationCodeRequest } from "../../controllers/v1/usersController.js";
import { debuggerMidd } from "../../middlewares/debugger.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.use(debuggerMidd);

userRouter.post("/signin", usersSignin);
userRouter.post("/login", usersLogin);
userRouter.delete("/delete", auth, usersDelete);
userRouter.get("/list", auth, usersList);
userRouter.post("/activationCodeRequest", auth, usersActivationCodeRequest);

export default userRouter;
