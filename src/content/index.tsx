import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import "../styles/tailwind.css";

const root = document.createElement("div");
root.id = "chrome-extension-root"; // Add a unique ID to the root element
document.body.appendChild(root); // Append the root element to the body

ReactDOM.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>,
  root,
);

// Add other content scripts here
