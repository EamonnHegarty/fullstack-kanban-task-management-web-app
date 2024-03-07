import asyncHandler from "../middleware/asyncHandler.js";
import Board from "../models/boardModel.js";

// @desc Fetch all boards
// @route GET /api/boards
// @access PRIVATE
const getBoards = asyncHandler(async (req, res) => {
  // Fetch the boards along with their columns
  const boards = await Board.find({ user: req.user._id }).select(
    "boardName columns._id columns.columnName"
  );

  const transformedBoards = boards.map((board) => ({
    _id: board._id,
    boardName: board.boardName,
    columns: board.columns.map((column) => ({
      _id: column._id,
      columnName: column.columnName,
    })),
  }));

  res.json(transformedBoards);
});

// @desc Create a board
// @route POST /api/boards
// @access PRIVATE
const createBoard = asyncHandler(async (req, res) => {
  const { boardName, columns } = req.body;

  if (!boardName || boardName.trim().length === 0) {
    res.status(400);
    throw new Error("Board name is required");
  }

  const board = new Board({
    user: req.user._id,
    boardName,
    columns: columns,
  });

  const createdBoard = await board.save();
  res.status(201).json(createdBoard);
});

// @desc Fetch a board
// @route GET /api/boards/:id
// @access PRIVATE
const getBoardById = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (board) {
    res.json(board);
  } else {
    res.status(404);
    throw new Error("resource not found");
  }
});

// @desc Update a board
// @route PUT /api/boards/:id
// @access PRIVATE
const updateBoard = asyncHandler(async (req, res) => {
  const { boardName, columns } = req.body;

  const board = await Board.findById(req.params.id);

  if (board) {
    board.boardName = boardName;
    board.columns = columns.map((column) => ({
      _id: column._id,
      columnName: column.columnName,
    }));

    const updatedBoard = await board.save();
    res.json(updatedBoard);
  } else {
    res.status(404);
    throw new Error("Board not found");
  }
});

// @desc Delete a board
// @route DELETE /api/boards/:id
// @access PRIVATE#
const deleteBoard = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const board = await Board.findByIdAndDelete(id);

  if (board) {
    res.status(200).json({ message: "Successfully deleted board" });
  } else {
    res.status(404).json({ message: "Board not found" });
  }
});

export { getBoards, getBoardById, createBoard, updateBoard, deleteBoard };
