import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingHome from "./pages/landing/LandingHome";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingHome></LandingHome>
  </StrictMode>
);
