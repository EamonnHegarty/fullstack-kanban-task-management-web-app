import { Navbar } from "../components/Navbar";
import { Drawer } from "../components/Drawer";
import { ToDosArea } from "../components/ToDosArea";
import Box from "@mui/material/Box";
import { useGetBoardsQuery } from "../slices/boardsApiSlice";

const Desktop = () => {
  const { data: boards = [] } = useGetBoardsQuery({});

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Drawer data={boards} />
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <ToDosArea />
      </Box>
    </Box>
  );
};

export { Desktop };
