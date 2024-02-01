import asyncHandler from "../middleware/asyncHandler.js";
import Board from "../models/boardModel.js";

// @desc Fetch all boards
// @route GET /api/boards
// @access Public
const getBoards = asyncHandler(async (req, res) => {
  const boards = await Board.find({}, { boardName: 1 });
  res.json(boards);
});

// @desc Fetch a board
// @route GET /api/boards/:id
// @access Public
const getBoardById = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (board) {
    res.json(board);
  } else {
    res.status(404);
    throw new Error("resource not found");
  }
});

export { getBoards, getBoardById };
