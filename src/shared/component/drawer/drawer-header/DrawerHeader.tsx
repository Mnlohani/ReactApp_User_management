import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const DrawerHeader = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Box display={"flex"} height={72} justifyContent={"center"} mb={1}>
      <Button
        fullWidth
        variant={"text"}
        size={"large"}
        onClick={() => navigate("/")}
        sx={{ color: "common.white" }}
      >
        {"Home"}
      </Button>
    </Box>
  );
};
