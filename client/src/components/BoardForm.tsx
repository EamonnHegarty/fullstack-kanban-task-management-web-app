import { useState, useCallback, FC } from "react";
import {
  Grid,
  IconButton,
  TextField,
  Typography,
  Button,
  alpha,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type ColumnTextFieldProps = {
  value: string;
  onDelete: () => void;
};

const ColumnTextField: FC<ColumnTextFieldProps> = (
  props
): React.ReactElement => {
  const { value, onDelete } = props;
  return (
    <Grid container spacing={1} sx={{}}>
      <Grid item xs={10}>
        <TextField value={value} variant="outlined" fullWidth size="small" />
      </Grid>
      <Grid
        item
        xs={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <IconButton onClick={onDelete}>
          <CloseIcon sx={{ color: "text.secondary" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const BoardForm = () => {
  const [columns, setColumns] = useState([""]);

  const handleAddColumn = () => {
    if (columns.length >= 3) {
      return;
    }
    setColumns([...columns, ""]);
  };

  const handleDeleteColumn = useCallback(
    (index: number) => {
      setColumns(columns.filter((_, colIndex) => colIndex !== index));
    },
    [columns]
  );

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h2" sx={{ color: "text.primary" }}>
          Add New Board
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Board Name
        </Typography>
      </Grid>
      <Grid item>
        <TextField id="board-name" variant="outlined" fullWidth size="small" />
      </Grid>
      <Grid item>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Board Columns
        </Typography>
      </Grid>
      {columns.map((column, index) => (
        <Grid item key={index}>
          <ColumnTextField
            value={column}
            onDelete={() => handleDeleteColumn(index)}
          />
        </Grid>
      ))}
      <Grid item>
        <Button
          onClick={handleAddColumn}
          variant="contained"
          sx={{
            color: "info.dark",
            backgroundColor: "info.main",
            "&:hover": {
              backgroundColor: "info.light",
            },
            width: "100%",
            borderRadius: 8,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            + Add New Column
          </Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button
          onClick={handleAddColumn}
          variant="contained"
          sx={{
            color: "secondary.light",
            backgroundColor: "primary.light",
            "&:hover": {
              backgroundColor: alpha("#A7A9FC", 0.85),
            },
            width: "100%",
            borderRadius: 8,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Create New Board
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default BoardForm;
