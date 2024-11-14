import { Router } from "express";
import passport from "passport";
import { usersSignin, usersLogin, usersDelete } from "../../controllers/v1/usersController.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.post("/signin", usersSignin);
userRouter.post("/login", usersLogin);
userRouter.delete("/delete", auth, usersDelete);

export default userRouter;
