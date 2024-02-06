import { useState, useCallback, FC } from "react";
import { Grid, IconButton, TextField, Typography, Button } from "@mui/material";
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
    <Grid container spacing={1} sx={{ mb: 1 }}>
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
    <>
      <Typography variant="h2" sx={{ color: "text.primary", mb: 3 }}>
        Add New Board
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
        Board Name
      </Typography>
      <TextField
        id="board-name"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
      />
      <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
        Board Columns
      </Typography>
      {columns.map((column, index) => (
        <ColumnTextField
          key={index}
          value={column}
          onDelete={() => handleDeleteColumn(index)}
        />
      ))}
      <Button onClick={handleAddColumn} variant="contained" sx={{ mb: 2 }}>
        + Add New Column
      </Button>
    </>
  );
};

export default BoardForm;
