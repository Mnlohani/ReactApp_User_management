import Box from "@mui/material/Box";
import { ContentContainer, ContentHeadline } from "@/shared/component/content";
import { UserCards } from "../component/card";

export const User = (): JSX.Element => {
  return (
    <Box bgcolor={"grey.200"} px={2} py={2}>
      <ContentContainer>
        <ContentHeadline />
        <UserCards />
      </ContentContainer>
    </Box>
  );
};
