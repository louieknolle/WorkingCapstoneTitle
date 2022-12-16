import React from "react";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import App from "./components/App";
import { GearContextProvider } from "./context/GearContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GearContextProvider>
      <App />
    </GearContextProvider>
  </React.StrictMode>
);
