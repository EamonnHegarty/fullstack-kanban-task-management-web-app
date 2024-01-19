import express from "express";
import asyncHandler from "../middleware/asyncHandler.js";
import Board from "../models/boardModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const boards = await Board.find({});
    res.json(boards);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const board = await Board.findById(req.params.id);

    if (board) {
      res.json(board);
    } else {
      res.status(404);
      throw new Error("resource not found");
    }
  })
);

export default router;
