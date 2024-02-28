import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAppSelector } from "../hooks";

const Navbar = () => {
  const { selectedBoardName } = useAppSelector((state) => state.app);

  return (
    <Box
      sx={{ minHeight: "10vh" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ backgroundColor: "background.default", color: "text.primary" }}
      >
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1, color: "text.main" }}>
            {selectedBoardName}
          </Typography>
          <Button color="inherit">+ Add new task</Button>
          <IconButton color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };
