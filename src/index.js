import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import projects from "./projects";

ReactDOM.render(
  <React.StrictMode>
    <App projects={projects} />
  </React.StrictMode>,
  document.getElementById("root")
);
