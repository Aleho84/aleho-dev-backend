import { Router } from "express";
import passport from "passport";
import { usersSignin, usersLogin, usersTest } from "../../controllers/v1/usersController.js";

const userRouter = Router();

userRouter.post("/signin", usersSignin);
userRouter.post("/login", usersLogin);
userRouter.get("/test", passport.authenticate("jwt", { session: false }), usersTest);

export default userRouter;
