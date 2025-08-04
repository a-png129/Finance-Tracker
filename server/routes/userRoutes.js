import express from "express";
import {
    getUser
} from "../controllers/userController.js";
import { fakeAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(fakeAuth);

// GET /api/user
router.get("/", getUser);

router.get("/test", (req, res) => {
  res.send("OK");
});

// PUT /api/user
// router.put("/", updateUser);

export default router;