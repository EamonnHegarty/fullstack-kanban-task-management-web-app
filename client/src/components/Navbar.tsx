import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  setIsEditingBoard,
  setOpenTaskForm,
  setSelectedBoardId,
  setSelectedBoardName,
  setShouldRefreshBoardData,
  setShouldRefreshBoardsListOnly,
} from "../slices/appSlice";
import React, { useCallback } from "react";
import { Menu, MenuItem } from "@mui/material";
import { setOpenBoardForm } from "../slices/appSlice";
import { useDeleteBoardByIdMutation } from "../slices/boardsApiSlice";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logoutClient } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [logout] = useLogoutMutation();

  const { selectedBoardName, selectedBoardId, openTaskForm } = useAppSelector(
    (state) => state.app
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [deleteBoardById] = useDeleteBoardByIdMutation();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditBoardClick = () => {
    dispatch(setOpenBoardForm(true));
    dispatch(setIsEditingBoard(true));
    handleClose();
  };

  const handleOnDeleteBoard = useCallback(() => {
    const promise = deleteBoardById(selectedBoardId);
    promise.then(() => {
      dispatch(setShouldRefreshBoardData(true));
      dispatch(setShouldRefreshBoardsListOnly(true));
      dispatch(setSelectedBoardId(null));
      dispatch(setSelectedBoardName(""));
    });
  }, [deleteBoardById, dispatch, selectedBoardId]);

  const handleOnAddTaskClicked = () => {
    dispatch(setOpenTaskForm(!openTaskForm));
  };

  const handleOnLogout = useCallback(() => {
    const promise = logout({}).unwrap();

    promise
      .then(() => {
        toast.success("Log out successful");
        dispatch(logoutClient());
        navigate("/");
      })
      .catch(() => {
        toast.error("Failed to log out");
      });
  }, [dispatch, logout, navigate]);

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
            onClick={handleOnAddTaskClicked}
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
            <MenuItem
              onClick={handleEditBoardClick}
              disabled={!selectedBoardId?.length}
            >
              <Typography variant="body1">Edit Board</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleOnDeleteBoard}
              disabled={!selectedBoardId?.length}
            >
              <Typography variant="body1">Delete Board</Typography>
            </MenuItem>
            <MenuItem onClick={handleOnLogout}>
              <Typography variant="body1">Logout</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Navbar };
