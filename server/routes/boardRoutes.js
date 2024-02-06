import express from "express";
import {
  getBoards,
  getBoardById,
  createBoard,
} from "../controllers/boardController.js";

const router = express.Router();

router.route("/").get(getBoards);
router.route("/").post(createBoard);
router.route("/:id").get(getBoardById);

export default router;
