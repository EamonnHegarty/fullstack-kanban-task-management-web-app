import express from "express";
import { getColumnsByBoardId } from "../controllers/columnController.js";
import { protect } from "../middleware/authMiddleware.js";
import taskRoutes from "./taskRoutes.js";

const router = express.Router({ mergeParams: true });

router.get("/", protect, getColumnsByBoardId);

router.use("/:id/tasks", taskRoutes);

export default router;
