import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Board } from "./pages/Board";
import Login from "./pages/Login";
import { Box } from "@mui/material";
import { useTheme } from "./theme/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/theme";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/boards" element={<Board />} />
    </Routes>
  );
};

function App() {
  const { darkMode } = useTheme();

  return (
    <Router>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Box
          sx={{
            background: (theme) => theme.palette.background.default,
          }}
        >
          <AppRouter />
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
