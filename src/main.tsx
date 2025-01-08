import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GenreProvider } from "./contexts/GenreContext.tsx";
import { FavoritesProvider } from "./contexts/FavoritesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GenreProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </GenreProvider>
  </StrictMode>
);
