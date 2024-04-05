import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Form } from "./Form";
import {
  setOpenTaskForm,
  setSelectedOption,
  setShouldRefreshBoardData,
} from "../slices/appSlice";
import { ColumnsForTaskForm } from "../types/BoardsData";
import { useCreateTaskWithSubTasksMutation } from "../slices/tasksApiSlice";
import { toast } from "react-toastify";

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const {
    selectedBoard,
    isEditingBoard,
    selectedTask,
    optionsForStatus,
    selectedOption,
  } = useAppSelector((state) => state.app);

  const [taskTitle, setTaskTitle] = useState<string>(
    isEditingBoard && selectedTask ? selectedTask.boardName : ""
  );
  const [taskDescription, setTaskDescription] = useState<string>(
    isEditingBoard && selectedTask ? selectedTask.boardName : ""
  );
  const [columns, setColumns] = useState<string[]>(
    isEditingBoard && selectedTask?.columns
      ? selectedTask.columns.map((column) => column.columnName)
      : [""]
  );

  const [createTask] = useCreateTaskWithSubTasksMutation();

  const textFieldsInfo = [
    {
      id: 1,
      title: "Title",
      value: taskTitle,
      onChange: setTaskTitle,
    },
    {
      id: 2,
      title: "Description",
      value: taskDescription,
      onChange: setTaskDescription,
    },
  ];

  const buttonText = isEditingBoard ? "Save Changes" : "Add Task";

  const handleSetSelectedOption = useCallback(
    (option: ColumnsForTaskForm) => {
      dispatch(setSelectedOption(option));
    },
    [dispatch]
  );

  const handleOnSubmitForm = () => {
    const promise = createTask({
      id: selectedBoard?._id,
      columnId: selectedOption?._id,
      taskTitle,
      taskDescription,
      subtasks: columns,
    }).unwrap();

    promise
      .then(() => {
        toast.success("Task Created Successfully");
      })
      .catch(() => {
        toast.error("Failed to create task");
      })
      .finally(() => {
        dispatch(setOpenTaskForm(false));
        dispatch(setShouldRefreshBoardData(true));
      });
  };

  return (
    <Form
      formTitle="Add Task"
      columnsTitle="Subtasks"
      formDataEntryData={textFieldsInfo}
      buttonText={buttonText}
      columns={columns}
      setColumns={setColumns}
      handleOnSubmitForm={handleOnSubmitForm}
      isTaskForm
      options={optionsForStatus || []}
      selectedOption={selectedOption}
      setSelectedOption={handleSetSelectedOption}
    />
  );
};

export default TaskForm;
