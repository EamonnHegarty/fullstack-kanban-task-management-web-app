import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Form } from "./Form";
import { setSelectedOption } from "../slices/appSlice";

const TaskForm = () => {
  const dispatch = useAppDispatch();
  const { isEditingBoard, selectedTask, optionsForStatus, selectedOption } =
    useAppSelector((state) => state.app);

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

  const buttonText = isEditingBoard ? "Save Changes" : "Create New Board";

  const handleSetSelectedOption = (option: string) => {
    dispatch(setSelectedOption(option));
  };

  const handleOnSubmitForm = () => {
    console.log("submit");
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
