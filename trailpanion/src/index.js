import React from "react";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import App from "./components/App";
import { BackpacksContextProvider } from "./context/BackpackContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BackpacksContextProvider>
      <App />
    </BackpacksContextProvider>
  </React.StrictMode>
);
