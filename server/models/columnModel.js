import mongoose from "mongoose";

const columnSchema = new mongoose.Schema(
  {
    board: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Board",
    },
    columnName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Column = mongoose.model("Column", columnSchema);
export default Column;
