import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const NavigationLink = () => {
  return (
    <Box py={1}>
      <Button>
        <Typography variant={"h5"} color={"common.white"}>
          {"About us"}
        </Typography>
      </Button>
    </Box>
  );
};
