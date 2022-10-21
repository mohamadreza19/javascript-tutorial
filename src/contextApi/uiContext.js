import { createContext, useContext, useState } from "react";
const UiContext = createContext({});
export const useUiContext = () => useContext(UiContext);
export const UiProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const values = {
    openDrawer,
    setOpenDrawer,
  };

  return <UiContext.Provider value={values}>{children}</UiContext.Provider>;
};
