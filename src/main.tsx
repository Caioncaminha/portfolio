import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Garante que importa App.tsx
import "./index.scss"; // Importa o SCSS global

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
