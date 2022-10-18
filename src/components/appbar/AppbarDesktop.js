import { Box, ButtonGroup, Divider } from "@mui/material";
import {
  DesktopContainer,
  LogoText,
  Logo,
  LogoBox,
  ActionButtonBox,
  ActionButton,
  RegisterBox,
  RegisterActionButtonGroup,
  DividerAppbar,
} from "../../styles/appbar";

export default function AppbarDesktop() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <DesktopContainer>
          <LogoBox>
            <Logo src="/images/logo.svg" />
            <LogoText variant="h5" color={"primary"}>
              JavaScript
            </LogoText>
          </LogoBox>
          <ActionButtonBox>
            <ActionButton>خانه</ActionButton>
            <ActionButton>ES6</ActionButton>
            <ActionButton>بام(js Bom)</ActionButton>
            <ActionButton>دام(js ِDom)</ActionButton>
            <ActionButton>دام(js ِDom)</ActionButton>
            <ActionButton>تماس با ما</ActionButton>
            <RegisterBox>
              <RegisterActionButtonGroup
                sx={{ position: "relative", top: "2px" }}
                disableElevation
                variant="text"
                aria-label="Disabled elevation buttons"
                size="large"
              >
                <ActionButton>ثبت نام</ActionButton>
                <ActionButton>ورود</ActionButton>
              </RegisterActionButtonGroup>
            </RegisterBox>
          </ActionButtonBox>
        </DesktopContainer>
      </Box>
      <DividerAppbar />
    </>
  );
}
