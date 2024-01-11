import mongoose from "mongoose";
import tasksSchema from "./taskModel";

const boardSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    boardName: {
      type: String,
      required: true,
    },
    tasks: [tasksSchema],
  },
  { timestamps: true }
);

const Board = mongoose.model("Board", boardSchema);

export default Board;
