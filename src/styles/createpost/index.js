import {
  Box,
  InputLabel,
  Select,
  styled,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ColorsDark } from "../theme";

export const CpContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
}));

export const CpTitleBox = styled(Box)(() => ({
  marginTop: "2rem",
}));
export const CpTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
export const CpTextFieldBox = styled(Box)(() => ({
  width: 400,
}));

export const CpTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginTop: "2rem",

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

export const CpSelectBox = styled(Box)(({}) => ({
  marginTop: "2rem",
}));
export const CpInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const CpSelect = styled(Select)(({ theme }) => ({
  width: 200,
  "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.secondary.main,
  },
  ".MuiSelect-select": {
    color: theme.palette.primary.main,
  },

  ".MuiSvgIcon-root ": {
    fill: "white !important",
  },
}));
