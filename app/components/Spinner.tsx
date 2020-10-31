import { CircularProgress, Grid, Typography } from "@material-ui/core";

const Spinner = ({ text }: { text: string }) => {
  return (
    <Grid container justify={"center"} alignItems={"center"} spacing={4}>
      <Grid item xs={3}>
        <CircularProgress color="secondary" />
      </Grid>
      <Grid item xs={9}>
        <Typography variant="h5">{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default Spinner;
