import express from "express";
import { signupUser, signinUser } from "../controllers/authController";

const router = express.Router();

router.post("/sign-up", signupUser);
router.post("/sign-in", signinUser);

export default router;
