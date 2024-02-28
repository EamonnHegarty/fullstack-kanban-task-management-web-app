import { Grid, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";

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

export { ColumnTextField };
