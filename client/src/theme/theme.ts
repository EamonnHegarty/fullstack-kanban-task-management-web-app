import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F4F7FD",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4081",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#2B2C37",
      paper: "#20212C",
    },
  },
});

export { lightTheme, darkTheme };
