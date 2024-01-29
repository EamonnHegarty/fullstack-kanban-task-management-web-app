import { Box, Typography } from "@mui/material";

const ToDosArea = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="90vh"
      sx={{ backgroundColor: "background.paper", margin: 0 }}
    >
      <Typography variant="h2" color="text.secondary">
        This board is empty. Create a new column to get started
      </Typography>
    </Box>
  );
};

export { ToDosArea };
