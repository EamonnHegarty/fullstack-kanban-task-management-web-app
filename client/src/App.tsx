import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Desktop } from "./pages/Desktop";
import { Login } from "./pages/Login";
import { Box } from "@mui/material";
import { useTheme } from "./theme/useTheme";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme/theme";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/desktop" element={<Desktop />} />
      </Route>
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
      <ToastContainer />
    </Router>
  );
}

export default App;
