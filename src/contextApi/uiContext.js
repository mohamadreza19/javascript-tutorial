import { createContext } from "react";

export const UiContext = createContext({
  openDrawer: false,
  setOpenDrawer: () => {},
  loading: false,
  setLoading: () => {},
  contents: [{ categories: "category", titile: "init-title" }],
  setContents: () => {},
});

// const values = {
//   openDrawer,
//   setOpenDrawer,
//   loading,
//   setLoading,
//   contents,
//   setContents,
//   content,
//   setContent,
// };
