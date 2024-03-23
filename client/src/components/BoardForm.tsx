import { useState } from "react";
import {
  useCreateBoardMutation,
  useUpdateBoardMutation,
} from "../slices/boardsApiSlice";
import { toast } from "react-toastify";
import { Form } from "./Form";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setOpenBoardForm,
  setSelectedBoardName,
  setShouldRefreshBoardData,
  setShouldRefreshBoardsListOnly,
} from "../slices/appSlice";

const BoardForm = () => {
  const dispatch = useAppDispatch();
  const { isEditingBoard, selectedBoard } = useAppSelector(
    (state) => state.app
  );

  const [columns, setColumns] = useState<string[]>(
    isEditingBoard && selectedBoard?.columns
      ? selectedBoard.columns.map((column) => column.columnName)
      : [""]
  );
  const [boardName, setBoardName] = useState<string>(
    isEditingBoard && selectedBoard ? selectedBoard.boardName : ""
  );

  const [createBoard, { isLoading: isCreating }] = useCreateBoardMutation();
  const [updateBoard, { isLoading: isUpdating }] = useUpdateBoardMutation();

  const textFieldsInfo = [
    {
      id: 1,
      title: "Board Name",
      value: boardName,
      onChange: setBoardName,
    },
  ];

  const buttonText = isEditingBoard ? "Save Changes" : "Create New Board";

  const handleOnSubmitForm = async () => {
    if (isCreating || isUpdating) return;

    if (isEditingBoard && selectedBoard) {
      const promise = updateBoard({
        id: selectedBoard._id,
        boardName,
        columns: columns.map((columnName) => ({ columnName })),
      }).unwrap();

      promise
        .then(() => {
          toast.success("Board Updated Successfully");
          dispatch(setSelectedBoardName(boardName));
        })
        .catch(() => {
          toast.error("Failed to updated board");
        })
        .finally(() => {
          dispatch(setOpenBoardForm(false));
          dispatch(setShouldRefreshBoardData(true));
        });
      return;
    }
    const promise = createBoard({
      boardName,
      columns: columns.map((columnName) => ({ columnName })),
    }).unwrap();

    promise
      .then(() => {
        toast.success("Successfully created a new board");
      })
      .catch(() => {
        toast.error("Failed to create board");
      })
      .finally(() => {
        dispatch(setOpenBoardForm(false));
        dispatch(setShouldRefreshBoardData(true));
        dispatch(setShouldRefreshBoardsListOnly(true));
      });
  };

  return (
    <Form
      formTitle="Add New Board"
      columnsTitle="Columns"
      formDataEntryData={textFieldsInfo}
      buttonText={buttonText}
      columns={columns}
      setColumns={setColumns}
      handleOnSubmitForm={handleOnSubmitForm}
    />
  );
};

export { BoardForm };
