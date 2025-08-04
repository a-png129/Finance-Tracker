import express from "express";
import {
  createTransaction,
  getTransactions,
  getSummaryInfo
} from "../controllers/transactionController.js";
import { fakeAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(fakeAuth);

// GET /api/transaction
router.get("/", getTransactions);

router.get("/test", (req, res) => {
  res.send("OK");
});

// GET /api/transaction/summary
router.get("/summary", getSummaryInfo);

// POST /api/transaction
router.post("/", createTransaction);

export default router;