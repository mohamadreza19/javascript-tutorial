import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

import DesktopMain from "./DesktopMain";
import { useEffect } from "react";
import { findContect } from "./../../services/index";
import { useUiContext } from "../../contextApi/uiContext";

export default function Main() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <DesktopMain />;
}
