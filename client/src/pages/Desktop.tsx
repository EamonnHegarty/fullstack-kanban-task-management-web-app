import { Navbar } from "../components/Navbar";
import { Drawer } from "../components/Drawer";
import { ToDosArea } from "../components/ToDosArea";
import Box from "@mui/material/Box";
import {
  useGetBoardByIdQuery,
  useGetBoardsQuery,
} from "../slices/boardsApiSlice";
import { useCallback, useState } from "react";
import { Modal } from "../components/Modal";
import BoardForm from "../components/BoardForm";

const Desktop = () => {
  const [openCreateBoard, setOpenCreateBoard] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const { data: boards = [] } = useGetBoardsQuery({});
  const { data: dataForBoard = [] } = useGetBoardByIdQuery(selectedId, {
    skip: selectedId === 0,
  });

  console.log(dataForBoard);

  const handleOnSelectionMade = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Drawer
        data={boards}
        openCreateBoard={openCreateBoard}
        setOpenCreateBoard={setOpenCreateBoard}
        selectedId={selectedId}
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
        <ToDosArea />
        {openCreateBoard && (
          <Modal
            openCreateBoard={openCreateBoard}
            setOpenCreateBoard={setOpenCreateBoard}
            FormComponent={<BoardForm />}
          />
        )}
      </Box>
    </Box>
  );
};

export { Desktop };
