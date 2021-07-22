import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppFunctional from "./AppFunctional";

ReactDOM.render(
  <React.StrictMode>
    <AppFunctional initialCounter={"abc"} message={"important"} />
  </React.StrictMode>,
  document.getElementById("root")
);
