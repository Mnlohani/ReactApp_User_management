import Grid from "@mui/material/Grid";

interface Props {
  children: React.ReactNode;
}

export const ContentContainer: React.FC<Props> = ({ children }: Props) => (
  <Grid
    container
    rowSpacing={{ xs: 1, sm: 2, md: 3 }}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  >
    {children}
  </Grid>
);
