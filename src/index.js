import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h1><center>News</center></h1>
    <App />
  </React.StrictMode>,
  rootElement
);
