import { Router } from "express";
import { CheckController } from "../controllers/CheckController";

const checkRoutes = Router();

const controller = new CheckController();

checkRoutes.get("/", controller.ping);

export { checkRoutes };
