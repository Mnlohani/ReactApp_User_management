import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { useNavigate } from "react-router-dom";

export const CardFooter = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <CardActions>
      <Box display={"flex"} justifyContent={"space-between"} width={1}>
        <Button
          size={"small"}
          color={"primary"}
          onClick={() => navigate("/user/profile/edit")}
        >
          {"Edit"}
        </Button>

        {/* // TODO: color first */}
        <Button color={"primary"} size={"small"}>
          {"Delete"}
        </Button>
      </Box>
    </CardActions>
  );
};
