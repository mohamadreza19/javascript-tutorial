import {
  Box,
  Grid,
  List,
  ListItemText,
  Typography,
  styled,
  Divider,
  createTheme,
  ThemeProvider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Menu,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { MdOutlineChatBubble } from "react-icons/md";

const Colors = {
  AppBarContainer: "F9F8FD",
  secondary: "595861",
};

const theme = createTheme({
  typography: {
    fontFamily: "Dirooz,roboto",
  },
  palette: {
    secondary: {
      main: grey[400],
    },
  },
});

const AppBarContainer = styled(Box)(() => ({
  background: Colors.AppBarContainer,
  margin: "20px 40px 0px 40px",
  padding: 0,
}));
const MyList = styled(List)(() => ({
  display: "flex",
  // justifyContent: "center",
  fontSize: "42px",
}));
const LogoContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
const ActionsButtonContainer = styled(Box)(() => ({}));

export default function Test() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  console.log(open);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBarContainer>
        <MyList>
          <Box display="flex" width="200px" justifyContent="space-between">
            <LogoContainer>
              <MdOutlineChatBubble color="3C68FF" />
              <h4 style={{ marginRight: "6px" }}>نونیتو</h4>
            </LogoContainer>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                bgcolor: "E2E4E4",
                borderWidth: 1,
                marginRight: "40px",
                marginLeft: "40px",
              }}
            />
            <ActionsButtonContainer>
              <Box display="flex">
                <Button
                  color="secondary"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  محصولات
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
            </ActionsButtonContainer>
          </Box>
        </MyList>
      </AppBarContainer>
    </ThemeProvider>
  );
}
