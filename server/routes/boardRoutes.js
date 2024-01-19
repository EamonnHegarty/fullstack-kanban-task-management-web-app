import express from "express";
import { getBoards, getBoardById } from "../controllers/boardController.js";

const router = express.Router();

router.route("/").get(getBoards);
router.route("/:id").get(getBoardById);

export default router;
