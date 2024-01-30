import {
  Box,
  CSSObject,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
  Theme,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "../theme/useTheme";
import MuiDrawer from "@mui/material/Drawer";
import { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const DRAWER_WIDTH = 240;

const DUMMY_DATA = [
  {
    id: 1,
    boardName: "Platform Launch",
  },
  {
    id: 2,
    boardName: "Marketing Plan",
  },
  {
    id: 3,
    boardName: "Roadmap",
  },
];

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

const StyledSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.palette.primary.light,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const Drawer = () => {
  const { toggleDarkMode } = useTheme();

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(1);

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleListItemClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      sx={{ display: { xs: "none", sm: "flex" } }}
    >
      <Toolbar />
      <Box display="flex" flexDirection="column" height="100%">
        {open && (
          <List sx={{ flexGrow: 1 }}>
            <ListItem>
              <ListItemText primary="ALL BOARDS (8)" />
            </ListItem>
            {DUMMY_DATA.map((data) => (
              <ListItemButton
                selected={data.id === selectedId}
                onClick={() => handleListItemClick(data.id)}
                sx={{
                  "&.Mui-selected, &.Mui-selected:hover": {
                    backgroundColor: "#635FC7", // Replace with your custom color
                  },
                }}
              >
                <DashboardIcon sx={{ mr: 2 }} />
                <Typography
                  variant="body1"
                  color={
                    data.id === selectedId ? "text.primary" : "text.secondary"
                  }
                >
                  {data.boardName}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        )}
        <Box flexGrow={1} />
        <Box display="flex" justifyContent="center" alignItems="center">
          <LightModeIcon sx={{ color: "text.secondary" }} />
          <StyledSwitch onClick={toggleDarkMode} />
          <DarkModeIcon sx={{ color: "text.secondary" }} />
        </Box>
        <IconButton
          onClick={open ? handleDrawerClose : handleDrawerOpen}
          color="secondary"
          aria-label={open ? "hide drawer" : "show drawer"}
          sx={{
            mb: 2,
          }}
        >
          <MenuIcon sx={{ color: "text.secondary", mr: open ? 2 : 0 }} />
          {open && (
            <Typography variant="body1" color="text.secondary">
              Hide Sidebar
            </Typography>
          )}
        </IconButton>
      </Box>
    </StyledDrawer>
  );
};

export { Drawer };
