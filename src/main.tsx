import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GenreProvider } from "./contexts/GenreContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GenreProvider>
      <App />
    </GenreProvider>
  </StrictMode>
);
