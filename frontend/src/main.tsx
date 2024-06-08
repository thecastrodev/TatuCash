import React from "react";
import ReactDOM from "react-dom/client";
// import { Home } from "./pages/Home";
// import "./main.css";
import { Formations } from "./components/formations/Formations";
import { Level1 } from "./components/levels/level1/Level1";




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Home /> */}  
    <Formations />
    {/* <Level1 /> */}
  </React.StrictMode>
);
