import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const ContentHeadline = (): JSX.Element => {
  return (
    <Grid item xs={12}>
      <Typography variant={"h4"}>{"Our family"}</Typography>
    </Grid>
  );
};
