import {
  Box,
  CSSObject,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Switch,
  Theme,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useTheme } from "../theme/useTheme";
import MuiDrawer from "@mui/material/Drawer";
import {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Boards } from "../types/Boards";

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

const StyledSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: theme.palette.primary.light,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: theme.palette.primary.light,
  },
}));

type DrawerProps = {
  data: Array<Boards>;
  setOpenCreateBoard: Dispatch<SetStateAction<boolean>>;
  openCreateBoard: boolean;
  selectedId: number;
  handleOnSelectionMade: (id: number) => void;
};

const Drawer: FC<DrawerProps> = (props): ReactElement => {
  const {
    data,
    setOpenCreateBoard,
    openCreateBoard,
    selectedId,
    handleOnSelectionMade,
  } = props;

  const { toggleDarkMode, darkMode } = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

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
              <Typography variant="h4" sx={{ color: "text.secondary" }}>
                ALL BOARDS(8)
              </Typography>
            </ListItem>
            {data.map((data) => (
              <ListItemButton
                key={data._id}
                selected={data._id === selectedId}
                onClick={() => handleOnSelectionMade(data._id)}
                sx={{
                  "&.Mui-selected, &.Mui-selected:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              >
                <DashboardIcon sx={{ mr: 2 }} />
                <Typography
                  variant="body1"
                  color={
                    data._id === selectedId ? "text.primary" : "text.secondary"
                  }
                >
                  {data.boardName}
                </Typography>
              </ListItemButton>
            ))}
            <ListItemButton
              onClick={() => setOpenCreateBoard(!openCreateBoard)}
              sx={{
                color: "primary.light",
              }}
            >
              <DashboardIcon sx={{ mr: 2 }} />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                + Create a Board
              </Typography>
            </ListItemButton>
          </List>
        )}
        <Box flexGrow={1} />
        <Box display="flex" justifyContent="center" alignItems="center">
          <LightModeIcon sx={{ color: "text.secondary" }} />
          <StyledSwitch
            onClick={toggleDarkMode}
            checked={darkMode}
            sx={{ mx: 2 }}
          />
          <DarkModeIcon sx={{ color: "text.secondary" }} />
        </Box>
        <IconButton
          onClick={open ? handleDrawerClose : handleDrawerOpen}
          aria-label={open ? "hide drawer" : "show drawer"}
          sx={{
            mb: 2,
          }}
        >
          {!open ? (
            <VisibilityIcon
              sx={{ color: "text.secondary", mr: open ? 2 : 0 }}
            />
          ) : (
            <VisibilityOffIcon
              sx={{ color: "text.secondary", mr: open ? 2 : 0 }}
            />
          )}
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
