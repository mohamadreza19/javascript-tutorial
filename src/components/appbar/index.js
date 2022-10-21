import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

export default function AppBar() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <AppbarMobile /> : <AppbarDesktop />}</>;
}
