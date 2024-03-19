import { Navbar } from "../components/Navbar";
import { Drawer } from "../components/Drawer";
import { ToDosArea } from "../components/ToDosArea";
import Box from "@mui/material/Box";
import {
  useGetBoardByIdQuery,
  useGetBoardsQuery,
} from "../slices/boardsApiSlice";
import { Modal } from "../components/Modal";
import { BoardForm } from "../components/BoardForm";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setSelectedBoardId,
  setSelectedBoardName,
  setOpenBoardForm,
  setSelectedBoard,
  setShouldRefreshBoardData,
  setShouldRefreshBoardsListOnly,
} from "../slices/appSlice";
import { SelectedBoard } from "../types/BoardsData";
import { useEffect } from "react";

const Desktop = () => {
  const dispatch = useAppDispatch();

  const {
    selectedBoardId,
    openBoardForm,
    shouldRefreshBoardData,
    shouldRefreshBoardsListOnly,
  } = useAppSelector((state) => state.app);

  const { data: boards = [], refetch: refetchBoards } = useGetBoardsQuery({});
  const { data: dataForBoard = [], refetch: refetchDataForBoard } =
    useGetBoardByIdQuery(selectedBoardId, {
      skip: selectedBoardId === null,
    });

  const todosData = selectedBoardId ? dataForBoard : [];

  const handleOnSelectionMade = (data: SelectedBoard) => {
    dispatch(setSelectedBoardId(data._id));
    dispatch(setSelectedBoardName(data.boardName));
    dispatch(setSelectedBoard(data));
  };

  useEffect(() => {
    if (shouldRefreshBoardData) {
      refetchBoards();
      if (!shouldRefreshBoardsListOnly) {
        refetchDataForBoard();
      }
      dispatch(setShouldRefreshBoardData(false));
      dispatch(setShouldRefreshBoardsListOnly(false));
    }
  }, [
    dispatch,
    refetchBoards,
    refetchDataForBoard,
    shouldRefreshBoardData,
    shouldRefreshBoardsListOnly,
  ]);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Drawer
        data={boards}
        openBoardForm={openBoardForm}
        setOpenBoardForm={setOpenBoardForm}
        selectedId={selectedBoardId}
        handleOnSelectionMade={handleOnSelectionMade}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Box
          minHeight="90vh"
          sx={{ backgroundColor: "background.paper", margin: 0 }}
        >
          <ToDosArea data={todosData} />
        </Box>

        {openBoardForm && (
          <Modal
            openForm={openBoardForm}
            setOpenForm={setOpenBoardForm}
            FormComponent={<BoardForm />}
          />
        )}
      </Box>
    </Box>
  );
};

export { Desktop };
