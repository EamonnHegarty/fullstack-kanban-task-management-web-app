import mongoose from "mongoose";
import columnSchema from "./columnModel.js";

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
    columns: { type: [columnSchema], default: [] },
  },
  { timestamps: true }
);

const Board = mongoose.model("Board", boardSchema);

export default Board;
