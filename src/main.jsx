import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutesLandingpage from "./Routes.jsx";

import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutesLandingpage />
   
    </BrowserRouter>
  </StrictMode>
);
