import { Button, Grid, TextField, Typography, alpha } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { ColumnTextField } from "./ColumnTextField";

type FormDataEntry = {
  id: number;
  title: string;
  value: string;
  onChange: (value: string) => void;
};

type FormProps = {
  formTitle: string;
  columns: string[];
  formDataEntryData: FormDataEntry[];
  setColumns: (columns: string[]) => void;
  handleOnSubmitForm: () => void;
};

type FormDataEntryProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
};

const FormDataEntry: FC<FormDataEntryProps> = (props): React.ReactElement => {
  const { title, value, onChange } = props;

  return (
    <>
      <Grid item>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          id="board-name"
          variant="outlined"
          fullWidth
          size="small"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Grid>
    </>
  );
};

const Form: FC<FormProps> = (props): React.ReactElement => {
  const {
    columns,
    formTitle,
    handleOnSubmitForm,
    setColumns,
    formDataEntryData,
  } = props;

  const [isFormValid, setIsFormValid] = useState(false);

  const handleAddColumn = () => {
    if (columns.length >= 3) {
      return;
    }
    setColumns([...columns, ""]);
  };

  const handleColumnChange = (index: number, newValue: string) => {
    const updatedColumns = columns.map((column, colIndex) =>
      colIndex === index ? newValue : column
    );
    setColumns(updatedColumns);
  };

  const handleDeleteColumn = (index: number) => {
    const updatedColumns = columns.filter((_, colIndex) => colIndex !== index);
    setColumns(updatedColumns);
  };

  useEffect(() => {
    const isAnyEntryEmpty = formDataEntryData.some(
      (entry) => entry.value.trim() === ""
    );
    const areColumnsValid = columns.every((column) => column.trim() !== "");
    setIsFormValid(!isAnyEntryEmpty && areColumnsValid && columns.length > 0);
  }, [formDataEntryData, columns]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h2" sx={{ color: "text.primary" }}>
          {formTitle}
        </Typography>
      </Grid>
      {formDataEntryData.map((entry) => (
        <FormDataEntry
          key={entry.id}
          title={entry.title}
          value={entry.value}
          onChange={entry.onChange}
        />
      ))}
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
          disabled={!isFormValid}
        >
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Create New Board
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export { Form };
