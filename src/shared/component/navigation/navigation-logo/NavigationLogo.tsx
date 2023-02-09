import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const NavigationLogo = (): JSX.Element => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"flex-end"}>
      <Typography variant={"h2"}>{"EasyPeople"}</Typography>
      <Typography variant={"h5"}>{"people management made easy"}</Typography>
    </Box>
  );
};
