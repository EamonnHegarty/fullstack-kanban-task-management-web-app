import express from "express";
import { getColumnsByBoardId } from "../controllers/columnController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

router.get("/", protect, getColumnsByBoardId);

export default router;
