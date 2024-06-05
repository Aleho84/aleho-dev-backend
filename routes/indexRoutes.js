import { Router } from "express";
import passport from "passport";
import { getIndexPage, accessTest } from "../controllers/indexController.js";

const indexRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

indexRouter.get("/", getIndexPage);
indexRouter.get("/accessTest", accessTest);

export default indexRouter;
