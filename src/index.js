import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import SoloContent from "./components/SoloContent";
import { UiProvider } from "./contextApi/uiContext";

import Test from "./test";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UiProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/:title" element={<SoloContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UiProvider>
  </React.StrictMode>
);
