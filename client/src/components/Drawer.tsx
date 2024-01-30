import { CSSObject, IconButton, Theme, Toolbar, styled } from "@mui/material";
import { useTheme } from "../theme/useTheme";
import MuiDrawer from "@mui/material/Drawer";
import { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const DRAWER_WIDTH = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: DRAWER_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: theme.palette.background.default,
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
  backgroundColor: theme.palette.background.default,
});

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Drawer = () => {
  const { toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
    toggleDarkMode();
  }, [toggleDarkMode]);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
    toggleDarkMode();
  }, [toggleDarkMode]);

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <Toolbar />
      <IconButton
        onClick={open ? handleDrawerClose : handleDrawerOpen}
        color="secondary"
        aria-label={open ? "hide drawer" : "show drawer"}
      >
        <MenuIcon />
      </IconButton>
    </StyledDrawer>
  );
};

export { Drawer };
