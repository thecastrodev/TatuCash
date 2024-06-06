import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/about";
// import { Home } from "./pages/Home";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Home /> */}
    <About />
  </React.StrictMode>
);
