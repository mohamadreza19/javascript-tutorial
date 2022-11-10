import {
  Box,
  Grid,
  Link,
  ListItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const MainContainer = styled(Box)(({}) => ({
  display: "flex",
  marginTop: "2rem",
  justifyContent: "center",
}));

export const ParentGrid = styled(Grid)(({ theme }) => ({}));
export const MyBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "1rem",
}));
export const SearchBoxBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    marginTop: "2rem",
  },
}));

export const SearchBox = styled(TextField)(({ theme }) => ({
  ".MuiInputBase-input": {
    color: theme.palette.primary.main,
    height: "35px",
  },
}));
export const TilteText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.4rem",
}));

export function MyLink({ children, href }) {
  const StyledLink = styled(NavLink)(({ theme }) => ({
    color: "#7FB4E0",
    fontSize: "1rem",
    textDecoration: "none",
  }));

  return (
    <StyledLink to={href} underline="none">
      {children}
    </StyledLink>
  );
}
//Main
export const InfoBox = styled(Box)(() => ({
  marginTop: "2rem",
}));
export const InfoContectText = styled(Typography)(({ theme }) => ({
  color: "secondary",
  marginTop: "1rem",
}));
export const InfoListItem = styled(ListItem)(() => ({
  padding: 0,
}));

export const SectionBox = styled(Box)(({ theme }) => ({
  width: "100%",
  border: `1px solid #454545 `,
  padding: "1.5rem",
  borderRadius: "1rem",
  marginTop: "2rem",
}));
export const TextPatch = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  display: "inline",
  marginLeft: 2,
}));
