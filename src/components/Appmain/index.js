import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import DesktopMain from "./DesktopMain";

export default function Main() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return matches ? <h1>mobile</h1> : <DesktopMain />;
}
