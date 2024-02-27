import { Grid, Card, CardContent, Typography } from "@mui/material";

type TaskCardProps = {
  id: string;
  title: string;
  numTasks: number;
};

const TaskCard = (props: TaskCardProps) => {
  const { title, numTasks } = props;

  return (
    <Card
      sx={{
        mt: 2,
        backgroundColor: "background.default",
        borderRadius: "8px",
      }}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "left",
                mb: 1,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "left",
                color: "text.secondary",
              }}
            >
              {numTasks} of 2 subtasks
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
