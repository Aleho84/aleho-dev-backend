import { Router } from "express";
import passport from "passport";
import { listDevices, createDevice, updateDevice, deleteDevice } from "../../controllers/v1/devicesController.js";

const deviceRouter = Router();
const auth = passport.authenticate("jwt", { session: false });

// All routes protected
deviceRouter.get("/", auth, listDevices);
deviceRouter.post("/", auth, createDevice);
deviceRouter.put("/:id", auth, updateDevice);
deviceRouter.delete("/:id", auth, deleteDevice);

export default deviceRouter;
