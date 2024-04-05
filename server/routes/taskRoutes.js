import express from "express";
import { createTaskWithSubtasks } from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

router.post("/", protect, createTaskWithSubtasks);

export default router;
