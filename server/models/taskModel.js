import mongoose from "mongoose";
import subtaskSchema from "./subtaskSchema";

const tasksSchema = new mongoose.Schema(
  {
    taskTitle: {
      type: String,
      required: true,
    },
    taskDescription: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    subtasks: [subtaskSchema],
  },
  { timestamps: true }
);

export default tasksSchema;
