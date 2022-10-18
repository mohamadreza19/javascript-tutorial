import { Box, createTheme } from "@mui/material";
import { Container, styled } from "@mui/system";
import stylisRTLPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

export const ColorsDark = {
  logo: "#C7C7C7",
  backgound: "#171717",
  text: "#E3E3E3",
};

export const themeDark = createTheme({
  direction: "rtl",
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
  },
});

export const cacheRTL = createCache({
  key: "muyrtl",
  stylisPlugins: [prefixer, stylisRTLPlugin],
});

export const ContainerRoot = styled(Box)(() => ({}));
