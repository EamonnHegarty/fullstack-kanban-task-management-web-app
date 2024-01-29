import Grid from "@mui/material/Grid";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { ToDosArea } from "../components/ToDosArea";

const Desktop = () => {
  return (
    <Grid container>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        <Navbar />
        <ToDosArea />
      </Grid>
    </Grid>
  );
};

export { Desktop };
