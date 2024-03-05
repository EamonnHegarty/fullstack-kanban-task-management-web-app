import { Navbar } from "../components/Navbar";
import { Drawer } from "../components/Drawer";
import { ToDosArea } from "../components/ToDosArea";
import Box from "@mui/material/Box";
import {
  useGetBoardByIdQuery,
  useGetBoardsQuery,
} from "../slices/boardsApiSlice";
import { useCallback } from "react";
import { Modal } from "../components/Modal";
import { BoardForm } from "../components/BoardForm";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setSelectedBoardId,
  setSelectedBoardName,
  setOpenBoardForm,
} from "../slices/appSlice";

const Desktop = () => {
  const dispatch = useAppDispatch();

  const { selectedBoardId, openBoardForm } = useAppSelector(
    (state) => state.app
  );

  const { data: boards = [] } = useGetBoardsQuery({});
  const { data: dataForBoard = [] } = useGetBoardByIdQuery(selectedBoardId, {
    skip: selectedBoardId === null,
  });

  const handleOnSelectionMade = useCallback(
    (id: string, boardName: string) => {
      dispatch(setSelectedBoardId(id));
      dispatch(setSelectedBoardName(boardName));
    },
    [dispatch]
  );

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
          <ToDosArea data={dataForBoard} />
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
