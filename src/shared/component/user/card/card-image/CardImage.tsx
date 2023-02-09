import CardMedia from "@mui/material/CardMedia";
import { UserId } from "@/shared/interface/interface";
import { useNavigate } from "react-router-dom";

export interface Props {
  id: number;
}

export const CardImage = ({ id }: Props): JSX.Element => {
  const navigate = useNavigate();
  return (
    <CardMedia
      component={"img"}
      height={"180"}
      image={"src/image/image.jpeg"}
      alt={"green iguana"}
      onClick={() => navigate(`/user/profile/${id}`)}
    />
  );
};
