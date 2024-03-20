import asyncHandler from "../middleware/asyncHandler.js";
import Board from "../models/boardModel.js";
import Column from "../models/columnModel.js";
import Subtask from "../models/subtaskModel.js";
import Task from "../models/taskModel.js";

// @desc Fetch all boards
// @route GET /api/boards
// @access PRIVATE
const getBoards = asyncHandler(async (req, res) => {
  const boards = await Board.find({ user: req.user._id }).select("boardName");

  const transformedBoards = await Promise.all(
    boards.map(async (board) => {
      const columns = await Column.find({ board: board._id }).select(
        "columnName"
      );

      const transformedColumns = columns.map((column) => ({
        _id: column._id,
        columnName: column.columnName,
      }));

      return {
        _id: board._id,
        boardName: board.boardName,
        columns: transformedColumns,
      };
    })
  );

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
  });

  const createdBoard = await board.save();

  if (columns && columns.length > 0) {
    const createdColumns = await Promise.all(
      columns.map(async (column) => {
        const newColumn = new Column({
          board: createdBoard._id,
          columnName: column.columnName,
        });
        return await newColumn.save();
      })
    );

    createdBoard.columns = createdColumns;
  }

  res.status(201).json(createdBoard);
});

// @desc Fetch a board
// @route GET /api/boards/:id
// @access PRIVATE
const getBoardById = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (!board) {
    res.status(404);
    throw new Error("Board not found");
  }

  const columns = await Column.find({ board: board._id });

  const columnsWithTasks = [];

  for (const column of columns) {
    const tasks = await Task.find({ column: column._id });

    const tasksWithSubtasks = [];

    for (const task of tasks) {
      const subtasks = await Subtask.find({ tasks: task._id });

      tasksWithSubtasks.push({
        ...task.toObject(),
        subtasks,
      });
    }

    columnsWithTasks.push({
      ...column.toObject(),
      tasks: tasksWithSubtasks,
    });
  }

  const boardWithColumnsTasks = {
    ...board.toObject(),
    columns: columnsWithTasks,
  };

  res.json(boardWithColumnsTasks);
});

// @desc Update a board
// @route PUT /api/boards/:id
// @access PRIVATE
const updateBoard = asyncHandler(async (req, res) => {
  const { boardName, columns: updatedColumns } = req.body;

  const board = await Board.findById(req.params.id);

  if (!board) {
    res.status(404);
    throw new Error("Board not found");
  }

  board.boardName = boardName || board.boardName;
  await board.save();

  if (updatedColumns && updatedColumns.length > 0) {
    const updatedColumnIds = await Promise.all(
      updatedColumns.map(async (column) => {
        if (column._id) {
          await Column.findByIdAndUpdate(column._id, {
            columnName: column.columnName,
          });
          return column._id;
        } else {
          const newColumn = await new Column({
            board: board._id,
            columnName: column.columnName,
          }).save();
          return newColumn._id;
        }
      })
    );

    await Column.deleteMany({
      board: board._id,
      _id: { $nin: updatedColumnIds },
    });
  }

  const updatedBoard = await Board.findById(board._id).populate({
    path: "columns",
    select: "columnName",
  });

  res.json(updatedBoard);
});

// @desc Delete a board
// @route DELETE /api/boards/:id
// @access PRIVATE
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
