import { Navbar } from "../components/Navbar";
import { Drawer } from "../components/Drawer";
import { ToDosArea } from "../components/ToDosArea";
import Box from "@mui/material/Box";
import { useGetBoardsQuery } from "../slices/boardsApiSlice";
import { useState } from "react";
import { Modal } from "../components/Modal";
import BoardForm from "../components/BoardForm";

const Desktop = () => {
  const { data: boards = [] } = useGetBoardsQuery({});
  const [openCreateBoard, setOpenCreateBoard] = useState(false);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Drawer
        data={boards}
        openCreateBoard={openCreateBoard}
        setOpenCreateBoard={setOpenCreateBoard}
      />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
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
