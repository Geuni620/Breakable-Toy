import React from "react";
import ReactDOM from "react-dom/client";
import Compound from "./Compound";
import Legacy from "./Legacy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Compound />
    {/* <Legacy /> */}
  </React.StrictMode>
);
