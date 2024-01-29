import { Box, Typography } from "@mui/material";
import { useTheme } from "../theme/useTheme";

const Login = () => {
  const { toggleDarkMode } = useTheme();
  return (
    <Box onClick={toggleDarkMode}>
      <Typography variant="h1">Just checking brudr</Typography>
    </Box>
  );
};

export { Login };
