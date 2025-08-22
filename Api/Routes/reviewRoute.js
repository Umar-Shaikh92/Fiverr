import express from 'express';
import { verifyToken } from '../Middleware/jwt.js';
import {createReview, getReviews, deleteReview} from "../Controllers/reviewController.js";

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:gigId", getReviews);
router.delete("/:id", deleteReview);

export default router;
