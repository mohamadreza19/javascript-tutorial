import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppBar from "./components/appbar";
import AppDrawer from "./components/AppDrawer";
import Main from "./components/Appmain";

import { UiProvider } from "./contextApi/uiContext";
import { cacheRTL, ContainerRoot, themeDark } from "./styles/theme";

const App = () => {
  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={themeDark}>
          <CssBaseline />
          <UiProvider>
            <ContainerRoot>
              <AppBar />
              <Main />
            </ContainerRoot>
          </UiProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
