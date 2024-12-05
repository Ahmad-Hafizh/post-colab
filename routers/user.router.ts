import { Router } from "express";
import { signUp, signIn } from "../controllers/user.controller";

const route = Router();

route.post("/signup", signUp);
route.post("/signin", signIn);

export default route;
