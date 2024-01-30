import { createTheme } from "@mui/material";

const typography = {
  // Heading XL
  h1: {
    fontFamily: ["Plus Jakarta Sans", "serif"].join(","),
    fontSize: 24,
    fontWeight: "bold",
  },
  // Heading L
  h2: {
    fontFamily: ["Plus Jakarta Sans", "serif"].join(","),
    fontSize: 18,
    fontWeight: "bold",
  },
  // Heading M
  h3: {
    fontFamily: ["Plus Jakarta Sans", "serif"].join(","),
    fontSize: 15,
    fontWeight: "bold",
  },
  // Heading S
  h4: {
    fontFamily: ["Plus Jakarta Sans", "serif"].join(","),
    fontSize: 12,
    fontWeight: "bold",
  },
  body1: {
    fontFamily: ["Plus Jakarta Sans", "serif"].join(","),
    fontSize: 13,
  },
  body2: {
    fontFamily: ["Plus Jakarta Sans", "serif"].join(","),
    fontSize: 12,
    fontWeight: "bold",
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000112",
      light: "#F4F7FD",
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
  typography,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4081",
      light: "#635FC7",
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
  typography,
});

export { lightTheme, darkTheme };
