import express from "express";
import transactionRoutes from "./transactionRoutes.js"; 
import userRoutes from "./userRoutes.js"

const router = express.Router();

router.use("/transaction", transactionRoutes);
router.use("/user", userRoutes);

export default router;
