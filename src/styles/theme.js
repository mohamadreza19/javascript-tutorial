import { Box, createTheme } from "@mui/material";
import { Container, styled } from "@mui/system";
import stylisRTLPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

export const ColorsDark = {
  logo: "#C7C7C7",
  backgound: "#171717",
  text: "#E3E3E3",
  gray: "#2E2E2E",
};

export const themeDark = createTheme({
  direction: "rtl",
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: ColorsDark.text,
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: ColorsDark.text,
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: ColorsDark.logo,
          },
          //Filled
          "& .MuiFilledInput-root .MuiFilledInput-underline": {},
          //Standard
          "& .MuiInput-underline:before": {
            borderBottom: `2px solid ${ColorsDark.text}`,
          },
          "& .MuiInput-underline:hover:before": {
            borderBottom: "2px solid red",
          },
          "& .MuiInputBase-input": {
            color: ColorsDark.text,
          },
        },
      },
    },
  },
  palette: {
    background: {
      default: ColorsDark.backgound,
    },
    primary: {
      main: ColorsDark.text,
    },
    secondary: {
      main: ColorsDark.logo,
    },
  },
  typography: {
    fontFamily: "Dirooz, ubonto",
    body1: {
      fontSize: "1rem",
    },
  },
});

export const cacheRTL = createCache({
  key: "muyrtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

export const ContainerRoot = styled(Box)(({ theme }) => ({
  width: "60%",
  margin: "0 auto",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
