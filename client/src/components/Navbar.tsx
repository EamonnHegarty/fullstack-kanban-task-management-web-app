import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setIsEditingBoard } from "../slices/appSlice";
import React from "react";
import { Menu, MenuItem } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { selectedBoardName } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditBoardClick = () => {
    dispatch(setIsEditingBoard(true));
    handleClose();
  };

  const handleSignOutClick = () => {
    handleClose();
  };

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
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <Typography variant="h1" sx={{ flexGrow: 1, color: "text.main" }}>
            {selectedBoardName}
          </Typography>
          <Button
            sx={{
              backgroundColor: "primary.light",
              color: "white",
              borderRadius: 8,
              minWidth: "200px",
              mr: 1,
            }}
          >
            + Add new task
          </Button>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            disableRipple
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            slotProps={{
              paper: {
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                },
              },
            }}
          >
            <MenuItem onClick={handleEditBoardClick}>
              <Typography variant="body1">Edit Board</Typography>
            </MenuItem>
            <MenuItem onClick={handleSignOutClick}>
              <Typography variant="body1">Delete Board</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };
