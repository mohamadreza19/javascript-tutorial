import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useUiContext } from "../../contextApi/uiContext";
import { MyListItemButton } from "../../styles/appbar";

export default function AppDrawer() {
  const { openDrawer } = useUiContext();

  const Drawer = (
    <>
      <List>
        <MyListItemButton>
          <Typography variant="h6" color="primary">
            خانه
          </Typography>
        </MyListItemButton>
        <MyListItemButton>
          <Typography variant="h6" color="primary">
            ES6
          </Typography>
        </MyListItemButton>
        <MyListItemButton>
          <Typography variant="h6" color="primary">
            بام(js Bom)
          </Typography>
        </MyListItemButton>
        <MyListItemButton>
          <Typography variant="h6" color="primary">
            دام(js Dom)
          </Typography>
        </MyListItemButton>
        <MyListItemButton>
          <Typography variant="h6" color="primary">
            تماس با ما
          </Typography>
        </MyListItemButton>
      </List>
    </>
  );
  return openDrawer ? Drawer : null;
}
