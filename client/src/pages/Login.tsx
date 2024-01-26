import { Box } from "@mui/material";
import { useTheme } from "../theme/useTheme";

const Login = () => {
  const { toggleDarkMode } = useTheme();
  return <Box onClick={toggleDarkMode}>Login</Box>;
};

export default Login;
