import React from "react";
import ReactDOM from "react-dom/client";
// import { Home } from "./pages/Home";
// import "./main.css";
import { Formations } from "./components/formations/Formations";




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Home /> */}  
    <Formations />
  </React.StrictMode>
);
