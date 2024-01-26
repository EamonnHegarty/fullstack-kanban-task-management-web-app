import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000112",
    },
    secondary: {
      main: "#ff4081",
    },
    text: {
      primary: "#000112",
      secondary: "#828FA3",
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
    text: {
      primary: "#FFFFFF",
      secondary: "#828FA3",
    },
    background: {
      default: "#2B2C37",
      paper: "#20212C",
    },
  },
});

export { lightTheme, darkTheme };
