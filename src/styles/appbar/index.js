import styled from "@emotion/styled";
import { Box, Button, ButtonGroup, Divider, Typography } from "@mui/material";
import { ColorsDark } from "./../theme";

export const DesktopContainer = styled(Box)(() => ({
  display: "flex",
  width: "80%",
  justifyContent: "center",
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
