import { Router } from "express";
import passport from "passport";
import { usersSignin, usersLogin, usersDelete, usersList, usersActivationCodeRequest } from "../../controllers/v1/usersController.js";
import { debuggerMidd } from "../../utils/debugger.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.post("/signin", debuggerMidd, usersSignin);
userRouter.post("/login", debuggerMidd, usersLogin);
userRouter.delete("/delete", debuggerMidd, auth, usersDelete);
userRouter.get("/list", debuggerMidd, auth, usersList);
userRouter.post("/activationCodeRequest", debuggerMidd, auth, usersActivationCodeRequest);

export default userRouter;
