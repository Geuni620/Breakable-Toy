import {useState} from "react";
import "./App.css";
import SideBar from "./Sidebar";

const items = [
  {name: "home", label: "Home"},
  {
    name: "billing",
    label: "Billing",
    items: [
      {name: "statements", label: "Statements"},
      {name: "reports", label: "Reports"},
    ],
  },
  {
    name: "settings",
    label: "Settings",
    items: [{name: "profile", label: "Profile"}],
  },
];

function App() {
  return (
    <div style={{width: "300px"}}>
      <SideBar items={items} />
    </div>
  );
}

export default App;
