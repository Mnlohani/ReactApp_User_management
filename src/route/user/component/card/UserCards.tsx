import Grid from "@mui/material/Grid";
import { UserCard } from "@/shared/component/user/card";

export const UserCards = (): JSX.Element => {
  return (
    <>
      {Array.from(Array(20)).map((_: any, index: number) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <UserCard id={index} />
        </Grid>
      ))}
    </>
  );
};
