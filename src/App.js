import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useImmer } from "use-immer";
import NotFound from "./components/404";
import AppBar from "./components/appbar";
import Main from "./components/Appmain";
import Login from "./components/Authentication/LogIn";
import Register from "./components/Authentication/Register";
import CreatePost from "./components/CreatePost/Createpost";
import SoloContent from "./components/SoloContent";

import { UiContext } from "./contextApi/uiContext";
import { findContect } from "./services";

import { cacheRTL, themeDark, ContainerRoot } from "./styles/theme";

export default function App() {
  const [openDrawer, setOpenDrawer] = useImmer(true);
  const [loading, setLoading] = useImmer(false);
  const [contents, setContents] = useImmer([
    { categories: "ss", title: "initTitle" },
  ]);
  const [content, setContent] = useImmer({});
  const [credit, setCredit] = useImmer(false);

  useEffect(function () {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, status } = await findContect();

        if (status === 200) {
          setContents(data);
          setLoading(false);
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
            <UiContext.Provider
              value={{
                openDrawer,
                setOpenDrawer,
                loading,
                setLoading,
                contents,
                setContents,
                content,
                setContent,
                credit,
                setCredit,
              }}
            >
              <AppBar />
              <Routes>
                <Route path="/" element={<Main />}>
                  <Route path="/:title" element={<SoloContent />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </UiContext.Provider>
          </ContainerRoot>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
