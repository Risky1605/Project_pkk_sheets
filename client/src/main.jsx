import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingHome from "./pages/landing/LandingHome";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LandingHome></LandingHome>
    </BrowserRouter>
  </StrictMode>
);
