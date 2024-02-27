import { Grid, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import TaskCard from "./TaskCard";

type Subtask = {
  subtaskTitle: string;
  completed: boolean;
  _id: string;
  createdAt: string;
  updatedAt: string;
};

type Task = {
  taskTitle: string;
  taskDescription: string;
  subtasks: Subtask[];
  _id: string;
  createdAt: string;
  updatedAt: string;
};

type Column = {
  columnName: string;
  tasks: Task[];
  _id: string;
  createdAt: string;
  updatedAt: string;
};

type BoardData = {
  _id: string;
  user: string;
  boardName: string;
  columns: Column[];
  __v: number;
  createdAt: string;
  updatedAt: string;
};

type ToDosAreaProps = {
  data: BoardData;
};

const KanbanColumn = ({ columnName, tasks }: Column) => {
  return (
    <>
      <Typography variant="h2" sx={{ color: "text.secondary" }}>
        {columnName}
      </Typography>
      {tasks.map((task, index) => (
        <TaskCard
          id={task._id}
          key={index}
          title={task.taskTitle}
          numTasks={2}
          {...task}
        />
      ))}
    </>
  );
};

const ToDosArea: FC<ToDosAreaProps> = (props): ReactElement => {
  const { data } = props;

  const columns = data?.columns;

  return (
    <Grid container display="flex" justifyContent="center" spacing={5} p={3}>
      {columns?.map((column, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
          <KanbanColumn {...column} />
        </Grid>
      ))}
    </Grid>
  );
};

export { ToDosArea };
