import express from "express";
import {
  getBoards,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
} from "../controllers/boardController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getBoards);
router.route("/").post(protect, createBoard);
router.route("/:id").get(protect, getBoardById);
router.route("/:id").put(protect, updateBoard);
router.route("/:id").delete(protect, deleteBoard);

export default router;
