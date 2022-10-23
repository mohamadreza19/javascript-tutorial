import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect } from "react";
import AppBar from "./components/appbar";
import AppDrawer from "./components/AppDrawer";
import Main from "./components/Appmain";

import { UiProvider, useUiContext } from "./contextApi/uiContext";
import { findContect } from "./services";

import { cacheRTL, themeDark, ContainerRoot } from "./styles/theme";

const App = () => {
  const { setContents } = useUiContext();

  useEffect(function () {
    const fetchData = async () => {
      try {
        const { data, status } = await findContect();

        if (status === 200) {
          setContents(data);
        } else {
          console.log("مشکلی در دریافت اطلاعات از سمت سرور پیش امده است");
        }
      } catch (error) {
        console.log(error, "مشکلی در دریافت اطلاعات از سمت سرور پیش امده است");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={themeDark}>
          <CssBaseline />
          <ContainerRoot>
            <AppBar />
            <Main />
          </ContainerRoot>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
