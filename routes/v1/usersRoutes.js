import { Router } from "express";
import passport from "passport";
import { usersSignin, usersLogin, usersDelete, usersList, usersActivationCodeRequest, usersUpdate } from "../../controllers/v1/usersController.js";
import { debuggerMidd } from "../../middlewares/debugger.js";
import validate from "../../middlewares/validator.js";
import { userSigninSchema, userLoginSchema } from "../../utils/Joi.js";

const userRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

userRouter.use(debuggerMidd);

userRouter.post("/signin", validate(userSigninSchema), usersSignin);
userRouter.post("/login", validate(userLoginSchema), usersLogin);
userRouter.delete("/:userId", auth, usersDelete);
userRouter.get("/list", auth, usersList);
userRouter.post("/:userId/activation-code", auth, usersActivationCodeRequest);
userRouter.put("/:userId", auth, usersUpdate);

export default userRouter;
