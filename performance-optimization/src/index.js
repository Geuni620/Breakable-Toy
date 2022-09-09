import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Test1 from "./Test1";
import Test2 from "./Test2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Test1 />
    <Test2 />
  </React.StrictMode>
);
