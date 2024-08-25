import React from "react";
import ReactDOM from "react-dom";
import Popup from "./Popup";
import "../styles/tailwind.css";

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root"), // #root is the ID of the root element in the popup.html file
);
