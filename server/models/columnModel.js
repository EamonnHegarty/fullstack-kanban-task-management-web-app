import mongoose from "mongoose";
import tasksSchema from "./taskModel.js";

const columnSchema = new mongoose.Schema(
  {
    columnName: {
      type: String,
      required: true,
    },
    tasks: { type: [tasksSchema], default: [] },
  },
  { timestamps: true }
);

export default columnSchema;
