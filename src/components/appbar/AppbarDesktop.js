import { Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

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
  MyLink,
} from "../../styles/appbar";

export default function AppbarDesktop() {
  const navigate = useNavigate();
  return (
    <>
      <DesktopContainer>
        <LogoBox
          onClick={() => {
            navigate("/");
          }}
        >
          <Logo src="/images/logo.svg" />
          <LogoText variant="h5" color={"primary"}>
            JavaScript
          </LogoText>
        </LogoBox>
        <ActionButtonBox>
          <MyLink href={"/"}>خانه</MyLink>

          <MyLink href={"#"}>ES6</MyLink>
          <MyLink href={"#"}>بام(js Bom)</MyLink>
          <MyLink href={"#"}>دام(js ِDom)</MyLink>
          <MyLink href={"#"}>دام(js ِDom)</MyLink>
          <MyLink href={"#"}>تماس با ما</MyLink>
          <RegisterBox>
            <RegisterActionButtonGroup
              sx={{ position: "relative", top: "2px" }}
              disableElevation
              variant="text"
              aria-label="Disabled elevation buttons"
              size="large"
            >
              <ActionButton
                onClick={() => {
                  navigate("/register");
                }}
              >
                ثبت نام
              </ActionButton>
              <ActionButton>
                <MyLink href={"/login"}>ورود</MyLink>
              </ActionButton>
            </RegisterActionButtonGroup>
          </RegisterBox>
        </ActionButtonBox>
      </DesktopContainer>

      <DividerAppbar />
    </>
  );
}
