import Box from "@mui/material/Box";
import { DrawerBody } from "@/shared/component/drawer/drawer-body";
import { DrawerHeader } from "@/shared/component/drawer/drawer-header";

export const Drawer = (): JSX.Element => {
  return (
    <Box height={1} width={0.1} bgcolor={"warning.light"}>
      {/* // TODO: DrawerHead */}
      <DrawerHeader />
      <DrawerBody />
    </Box>
  );
};
