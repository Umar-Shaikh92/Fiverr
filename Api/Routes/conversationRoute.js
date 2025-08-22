import express from 'express';
import { verifyToken } from '../Middleware/jwt.js';
import { createConversation, updateConversation, getConversations, getSingleConversation } from '../Controllers/conversationController.js';

const router = express.Router();

router.post("/", verifyToken, createConversation);
router.put("/:id", verifyToken, updateConversation);
router.get("/", verifyToken, getConversations);
router.get("/single/:id", verifyToken, getSingleConversation);

export default router;