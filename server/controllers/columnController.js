import asyncHandler from "../middleware/asyncHandler.js";
import Column from "../models/columnModel.js";

// @desc Fetch all columns for a specific board
// @route GET /api/boards/:boardId/columns
// @access PRIVATE
export const getColumnsByBoardId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log();
  console.log("hio");
  const columns = await Column.find({ board: id }).select("columnName");

  console.log(columns);

  if (!columns) {
    res.status(404);
    throw new Error("Columns not found");
  }
  res.json(columns);
});
