import React from "react";
import ReactDom from "react-dom/client";

import App from "./App";
import { UiProvider } from "./contextApi/uiContext";

import Test from "./test";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UiProvider>
      <App />
    </UiProvider>
  </React.StrictMode>
);
