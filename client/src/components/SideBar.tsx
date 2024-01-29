import { Box } from "@mui/material";
import { useTheme } from "../theme/useTheme";

const SideBar = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <Box onClick={toggleDarkMode} minHeight="100vh">
      SideBar
    </Box>
  );
};

export default SideBar;
