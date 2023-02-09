import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";
import { IDrawerLink } from "@/shared/interface/interface";

const DRAWER_LINKS: IDrawerLink[] = [
  { id: 0, text: "Manage profile", disabled: false, navLink: "/EditProfile" },
  { id: 1, text: "To be added", disabled: true, navLink: "/EditProfile" },
  { id: 2, text: "To be added", disabled: true, navLink: "/EditProfile" },
  { id: 3, text: "To be added", disabled: true, navLink: "/EditProfile" },
];

export const DrawerBody = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      {DRAWER_LINKS.map((item) => {
        {
          console.log("hahah");
        }
        <ListItemButton key={item.id} disabled={item.disabled}>
          <ListItem
            sx={{ color: "common.white" }}
            disablePadding
            onClick={() => navigate(item.navLink)}
          >
            {item.id}
          </ListItem>
        </ListItemButton>;
      })}
    </>
  );
};
