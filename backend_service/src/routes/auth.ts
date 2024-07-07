import { Router } from "express";
import { Login } from "../controllers/auth";
import { SignUp } from "../controllers/auth";
// import authMiddleware from "../middlewares/auth";
// import errorMap from "zod/lib/locales/en";

const authRoutes: Router = Router();

authRoutes.post("/login", Login);
authRoutes.post("/signup", SignUp);
// authRoutes.get('/me', [authMiddleware])

export default authRoutes;
