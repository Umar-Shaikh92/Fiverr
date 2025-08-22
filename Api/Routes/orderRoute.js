import express from 'express';
import { verifyToken } from '../Middleware/jwt.js';
import { createOrder, getOrders } from '../Controllers/orderController.js';

const router = express.Router();

router.post("/:gigId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);

export default router;