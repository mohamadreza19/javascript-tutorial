import {
  ActionButton,
  ActionButtonBox,
  DesktopContainer,
  Logo,
  LogoBox,
  LogoText,
  MenuButton,
} from "../../styles/appbar";
import { Menu, Close } from "@mui/icons-material";
import { useContext } from "react";
import { UiContext } from "../../contextApi/uiContext";
import { useUiContext } from "./../../contextApi/uiContext";
import AppDrawer from "../AppDrawer";
export default function AppbarMobile() {
  const { openDrawer, setOpenDrawer } = useContext(UiContext);

  const handleClick = () => {
    setOpenDrawer((pre) => !pre);
  };

  return (
    <>
      <DesktopContainer desktop={false}>
        <LogoBox>
          <Logo src="/images/logo.svg" />
          <LogoText variant="h4" color="secondary">
            JavaScript
          </LogoText>
        </LogoBox>
        <ActionButtonBox>
          <MenuButton onClick={handleClick}>
            {openDrawer ? (
              <Close sx={{ fontSize: 40 }} />
            ) : (
              <Menu sx={{ fontSize: 40 }} />
            )}
          </MenuButton>
        </ActionButtonBox>
      </DesktopContainer>
      <AppDrawer />
    </>
  );
}
