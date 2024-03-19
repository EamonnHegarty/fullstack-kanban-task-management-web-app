import mongoose from "mongoose";

const subtaskSchema = new mongoose.Schema(
  {
    task: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Task",
    },
    subtaskTitle: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Subtask = mongoose.model("Subtask", subtaskSchema);
export default Subtask;
