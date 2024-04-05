import asyncHandler from "../middleware/asyncHandler.js";
import Task from "../models/taskModel.js";
import Subtask from "../models/subtaskModel.js";

export const createTaskWithSubtasks = asyncHandler(async (req, res) => {
  const { taskTitle, taskDescription, subtasks } = req.body;

  const { id } = req.params;

  console.log(id);

  const task = new Task({
    column: id,
    taskTitle,
    taskDescription,
  });

  const createdTask = await task.save();

  console.log(subtasks);

  if (subtasks && subtasks.length) {
    await Promise.all(
      subtasks.map(async (subtask) => {
        const newSubTask = new Subtask({
          task: createdTask._id,
          subtaskTitle: subtask,
          completed: false,
        });

        await newSubTask.save();
      })
    );
  }

  res.status(201).json(createdTask);
});
