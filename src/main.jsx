import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//DEPENDNECIES:
// npm create vite@latest
// npm run dev

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
