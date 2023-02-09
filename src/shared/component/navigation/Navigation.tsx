import Box from "@mui/material/Box";

import { NavigationLogo } from "@/shared/component/navigation/navigation-logo";
import { NavigationLink } from "@/shared/component/navigation/navigation-link";

export const Navigation = (): JSX.Element => {
  return (
    <Box
      color={"common.white"}
      display={"flex"}
      justifyContent={"space-between"}
      bgcolor={"secondary.light"}
      px={2}
    >
      <NavigationLogo />
      <NavigationLink />
    </Box>
  );
};
