import styled from "@emotion/styled";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { ColorsDark } from "./../theme";

export const DesktopContainer = styled(Box)(({ desktop = true }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const LogoBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

export const LogoText = styled(Typography)(() => ({
  fontFamily: "Caveat",
  marginRight: "2px",
}));
export const Logo = styled("img")(() => ({
  width: "62px",
  height: "56px",
}));

export const ActionButtonBox = styled(Box)(() => ({
  display: "flex",
  marginLeft: "15%",
}));

export const ActionButton = styled(Button)(() => ({}));
export const RegisterActionButtonGroup = styled(ButtonGroup)(() => ({
  position: "relative",
  top: "2px",
  left: "10%",
}));

export const RegisterBox = styled(Box)(() => ({
  display: "flex",
  justifyItems: "center",
}));
export const DividerAppbar = styled(Divider)(() => ({
  borderColor: ColorsDark.logo,
}));
//mobile
export const MenuButton = styled(Button)(() => ({}));

export const MyListItemButton = styled(ListItemButton)(() => ({
  padding: 16,
  margin: 0,
  backgroundColor: ColorsDark.gray,
  borderBottom: `1px solid #454545`,
}));
