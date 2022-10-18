import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppBar from "./components/appbar";
import { cacheRTL, ContainerRoot, themeDark } from "./styles/theme";

const App = () => {
  return (
    <>
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={themeDark}>
          <CssBaseline />
          <ContainerRoot>
            <AppBar />
          </ContainerRoot>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
