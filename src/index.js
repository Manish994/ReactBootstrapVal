import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import $ from "jquery";
import Popper from "popper.js";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
