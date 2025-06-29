import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./Routes.jsx";
import "./index.css";
import "./global.css";

// Workaround für initialen Ladevorgang
const initialPath = window.location.pathname;
if (initialPath.startsWith("/X1Updates") || initialPath === "/ValidatorGuide") {
  window.history.replaceState({}, document.title, "/"); // Internes Umleiten zur Root
} else {
  window.history.replaceState({}, document.title, initialPath); // Behalte den Pfad, falls korrekt
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);