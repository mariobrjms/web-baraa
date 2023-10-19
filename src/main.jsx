import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dest/main.css";
import Scrolltop from "./components/Scrolltop.jsx";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scrolltop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
