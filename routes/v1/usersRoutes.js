import { Router } from "express";
import passport from "passport";
import { usersSignin, usersLogin, usersDelete, usersList } from "../../controllers/v1/usersController.js";
import { debuggerMidd } from '../../src/debugger.js';

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.post("/signin", debuggerMidd, usersSignin);
userRouter.post("/login", debuggerMidd, usersLogin);
userRouter.delete("/delete", debuggerMidd, auth, usersDelete);
userRouter.get("/list", debuggerMidd, auth, usersList);

export default userRouter;
