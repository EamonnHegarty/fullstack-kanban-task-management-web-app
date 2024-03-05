import { useState } from "react";
import { useCreateBoardMutation } from "../slices/boardsApiSlice";
import { toast } from "react-toastify";
import { Form } from "./Form";

const BoardForm = () => {
  const [columns, setColumns] = useState([""]);
  const [boardName, setBoardName] = useState("");

  const [createBoard, { isLoading }] = useCreateBoardMutation();

  const textFieldsInfo = [
    {
      id: 1,
      title: "Board Name",
      value: boardName,
      onChange: setBoardName,
    },
  ];

  const handleOnSubmitForm = () => {
    if (isLoading) return;

    const promise = createBoard({
      boardName,
      columns,
    }).unwrap();
    promise
      .then(() => toast.success("Successfully created a new board"))
      .catch(() => toast.error("Failed to create board"))
      .finally(() => {
        setBoardName("");
        setColumns([""]);
      });
  };

  return (
    <Form
      formTitle="Add New Board"
      formDataEntryData={textFieldsInfo}
      columns={columns}
      setColumns={setColumns}
      handleOnSubmitForm={handleOnSubmitForm}
    />
  );
};

export { BoardForm };
