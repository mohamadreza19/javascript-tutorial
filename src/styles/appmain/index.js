import { Box, Grid, Link, styled, TextField, Typography } from "@mui/material";

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

export const SearchBox = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    color: theme.palette.primary.main,
    height: "35px",
  },
  ".MuiInputLabel-root": {
    color: theme.palette.primary.main,
  },
  ".MuiInputLabel-root:hover": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover fieldset": {
      borderColor: "#EDDC3D",
    },
    input: {
      "&::placeholder": {
        color: theme.palette.secondary.main,
      },
    },
  },
}));
export const TilteText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.4rem",
}));

export function MyLink({ children, href }) {
  const StyledLink = styled(Link)(({ theme }) => ({
    color: "#7FB4E0",
    fontSize: "1rem",
  }));

  return (
    <StyledLink href={href} underline="none">
      {children}
    </StyledLink>
  );
}
