import { Router } from "express";
import { Login } from "../controllers/auth";
import { SignUp } from "../controllers/auth";

const authRoutes: Router = Router();

authRoutes.post("/login", Login);
authRoutes.post("/signup", SignUp);

export default authRoutes;
