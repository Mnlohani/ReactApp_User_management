import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { CardImage } from "@/shared/component/user/card/card-image";
import { CardHeader } from "@/shared/component/user/card/card-header";
import { CardBody } from "@/shared/component/user/card/card-body";
import { CardFooter } from "@/shared/component/user/card/card-footer";

export interface Props {
  id: number;
}

export const UserCard = ({ id }: Props): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardImage id={id} />
        <CardContent>
          <CardHeader />
          <CardBody />
        </CardContent>
      </CardActionArea>
      <CardFooter />
    </Card>
  );
};
