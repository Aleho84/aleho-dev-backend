import { Router } from "express";
import passport from "passport";
import { usersSignin, usersLogin, usersDelete, usersList, usersActivationCodeRequest } from "../../controllers/v1/usersController.js";
import { debuggerMidd } from "../../middlewares/debugger.js";
import validate from "../../middlewares/validator.js";
import { userSigninSchema, userLoginSchema } from "../../utils/userSchemas.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.use(debuggerMidd);

userRouter.post("/signin", validate(userSigninSchema), usersSignin);
userRouter.post("/login", validate(userLoginSchema), usersLogin);
userRouter.delete("/delete", auth, usersDelete);
userRouter.get("/list", auth, usersList);
userRouter.post("/activationCodeRequest", auth, usersActivationCodeRequest);

export default userRouter;
