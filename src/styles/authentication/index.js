import { Box, styled, TextField, Typography, Button } from "@mui/material";

import { ColorsDark } from "./../theme";

export const RrBox = styled(Box)(() => ({
  display: "flex",
  marginTop: "2rem",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));
export const RrTitleBox = styled(Box)(() => ({}));

export const RrTitle = styled(Typography)(() => ({
  color: ColorsDark.logo,
}));
export const RtTextFieldBox = styled(Box)(() => ({
  marginTop: "4rem",
  width: "400px",
}));

export const RtTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginTop: "2rem",
  fontSize: theme.typography.h2,
  color: theme.palette.primary.main,

  ".MuiFormLabel-root": {
    color: theme.palette.primary.main,
  },

  ".MuiInputBase-root": {
    ":before": {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    color: theme.palette.primary.main,
  },

  ".MuiInputBase-input": {
    "::placeholder": {
      color: theme.palette.primary.main,
    },
    ":-webkit-autofill": {
      WebkitBoxShadow: `0 0 0px 1000px ${ColorsDark.backgound} inset !important`,
      WebkitTextFillColor: `${theme.palette.primary.main} !important`,
      backgroundClip: "content-box !important",
    },
  },
}));
export const RtSubmitButtonBox = styled(Box)(({}) => ({
  marginTop: "4rem",
  width: "400px",
}));

export const RtSubmitButton = styled(Button)(({ theme }) => ({
  width: "100%",
  fontSize: "2rem",
  backgroundColor: ColorsDark.text,
  "&:hover": {
    backgroundColor: ColorsDark.logo,
    borderColor: "#0062cc",
  },
  "&:active": {
    backgroundColor: ColorsDark.text,
  },
}));
