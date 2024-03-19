import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    column: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Column",
    },
    taskTitle: {
      type: String,
      required: true,
    },
    taskDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
