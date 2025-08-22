import express from 'express';
import { deleteUser, getUser } from '../Controllers/userController.js';
import { verifyToken } from '../Middleware/jwt.js';

const router = express.Router();

router.delete('/:id',verifyToken, deleteUser);
router.get('/:id',verifyToken, getUser);

export default router;
