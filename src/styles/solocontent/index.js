import { Box, styled, Typography } from "@mui/material";

export const ContinerSoloContent = styled(Box)(() => ({}));

export const TitleBox = styled(Box)(() => ({}));
export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 800,
}));
export const BodyBox = styled(Box)(() => ({
  marginTop: "3rem",
}));
export const Body = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  lineHeight: "2rem",
}));
