import express from "express";
import { verifyToken } from "../Middleware/jwt.js";
import {
  createMessage,
  getMessages,
} from "../Controllers/messageController.js";

const router = express.Router();

router.post("/", verifyToken, createMessage);
router.get("/:id", verifyToken, getMessages);

export default router;
