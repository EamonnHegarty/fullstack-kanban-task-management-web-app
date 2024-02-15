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
import { useCreateBoardMutation } from "../slices/boardsApiSlice";
import { toast } from "react-toastify";

type ColumnTextFieldProps = {
  value: string;
  onDelete: () => void;
  onChange: (value: string) => void;
};

const ColumnTextField: FC<ColumnTextFieldProps> = (
  props
): React.ReactElement => {
  const { value, onDelete, onChange } = props;
  return (
    <Grid container spacing={1}>
      <Grid item xs={10}>
        <TextField
          value={value}
          variant="outlined"
          fullWidth
          size="small"
          onChange={(e) => onChange(e.target.value)}
        />
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
  const [boardName, setBoardName] = useState("");

  const [createBoard, { isLoading }] = useCreateBoardMutation();

  const handleAddColumn = () => {
    if (columns.length >= 3) {
      return;
    }
    setColumns([...columns, ""]);
  };
  const handleColumnChange = useCallback(
    (index: number, newValue: string) => {
      setColumns(
        columns.map((column, colIndex) =>
          colIndex === index ? newValue : column
        )
      );
    },
    [columns]
  );

  const handleDeleteColumn = useCallback(
    (index: number) => {
      setColumns(columns.filter((_, colIndex) => colIndex !== index));
    },
    [columns]
  );

  const handleOnSubmitForm = useCallback(() => {
    console.log(isLoading);
    const promise = createBoard({
      boardName,
      columns,
    }).unwrap();
    promise
      .then(() => toast.success("Successfully created a new board"))
      .catch(() => toast.error("Failed to created board"))
      .finally(() => {
        setBoardName("");
        setColumns([]);
      });
  }, [boardName, columns, createBoard, isLoading]);

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
        <TextField
          id="board-name"
          variant="outlined"
          fullWidth
          size="small"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Board Columns
        </Typography>
      </Grid>
      {columns.map((column, index) => (
        <Grid item key={index}>
          <ColumnTextField
            onChange={(newValue) => handleColumnChange(index, newValue)}
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
          onClick={handleOnSubmitForm}
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
