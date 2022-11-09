import { Box, styled, Typography } from "@mui/material";
import { ColorsDark } from "./../theme";

export const MyBox = styled(Box)(() => ({
  display: "flex",
}));
export const Notfound = styled(Typography)(() => ({
  color: ColorsDark.logo,
}));
