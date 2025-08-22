import express from 'express';
import { verifyToken } from '../Middleware/jwt.js';
import {createGig, deleteGig, getGig, getAllGig} from '../Controllers/gigController.js';
const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getAllGig);

export default router;