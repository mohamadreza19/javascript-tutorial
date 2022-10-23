import { createContext, useContext, useState } from "react";
import { ContainerRootCss } from "../styles/theme";

const UiContext = createContext({});
export const useUiContext = () => useContext(UiContext);
export const UiProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const [contents, setContents] = useState([]);
  const [content, setContent] = useState({});

  const values = {
    openDrawer,
    setOpenDrawer,
    contents,
    setContents,
    content,
    setContent,
  };

  return <UiContext.Provider value={values}>{children}</UiContext.Provider>;
};
