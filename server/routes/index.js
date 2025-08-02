import express from "express";
import transactionRoutes from "./transactionRoutes.js"; // Make sure file extension is present

const router = express.Router();

router.use("/transaction", transactionRoutes);

export default router;
