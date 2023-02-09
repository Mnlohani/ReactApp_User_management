import Grid from "@mui/material/Grid";

interface Props {
  children: React.ReactNode;
}

export const ContentBody: React.FC<Props> = ({ children }: Props) => (
  <Grid item xs={6} sm={4} md={3}>
    {children}
  </Grid>
);
