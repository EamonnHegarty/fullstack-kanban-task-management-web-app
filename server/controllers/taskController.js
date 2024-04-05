import asyncHandler from "../middleware/asyncHandler.js";
import Task from "../models/taskModel.js";
import Subtask from "../models/subtaskModel.js";

export const createTaskWithSubtasks = asyncHandler(async (req, res) => {
  const { columnId, taskTitle, taskDescription, subtasks } = req.body;

  const task = new Task({
    column: columnId,
    taskTitle,
    taskDescription,
  });

  const createdTask = await task.save();

  if (subtasks && subtasks.length) {
    await Promise.all(
      subtasks.map(async (subtask) => {
        const newSubTask = new Subtask({
          task: createdTask._id,
          subtaskTitle: subtask.subtaskTitle,
          completed: false,
        });

        await newSubTask.save();
      })
    );
  }

  res.status(201).json(createdTask);
});
