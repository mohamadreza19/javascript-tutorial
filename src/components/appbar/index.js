import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import AppbarDesktop from "./AppbarDesktop";

export default function AppBar() {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <h1>mobile</h1> : <AppbarDesktop />}</>;
}
