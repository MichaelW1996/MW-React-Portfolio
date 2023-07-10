import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* out element for about me in here?
     */}
  </BrowserRouter>,
  document.getElementById("root")
);
