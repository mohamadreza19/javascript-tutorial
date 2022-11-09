import styled from "@emotion/styled";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  ListItem,
  ListItemButton,
  Typography,
  Link,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ColorsDark } from "./../theme";

export const DesktopContainer = styled(Box)(({ desktop = true }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const LogoBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  ":hover": {
    cursor: "pointer",
  },
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
export function MyLink({ children, href }) {
  const StyledLink = styled(NavLink)(({ theme }) => ({
    color: ColorsDark.text,
    fontSize: "1rem",
    textDecoration: "none",
    "&:hover": {
      color: ColorsDark.text,
    },
  }));

  return (
    <ActionButton>
      <StyledLink to={href}>{children}</StyledLink>
    </ActionButton>
  );
}

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
