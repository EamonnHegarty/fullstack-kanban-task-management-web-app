import mongoose from "mongoose";

const subtaskSchema = new mongoose.Schema(
  {
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

export default subtaskSchema;
