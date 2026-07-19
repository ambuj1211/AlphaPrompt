import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { getCurrentUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.get(
    "/me",
    authMiddleware,
    getCurrentUser
);

export default router;