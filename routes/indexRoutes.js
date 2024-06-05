import { Router } from "express";
import { getIndexPage } from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndexPage);

export default indexRouter;
