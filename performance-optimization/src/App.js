import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactMemo from "./ReactMemo";
import {ReactCallback1, ReactCallback2} from "./ReactCallback";
import {ReactReducer} from "./ReactReducer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactReducer />} />
        <Route path="/memo" element={<ReactMemo />} />
        <Route path="/callback1" element={<ReactCallback1 />} />
        <Route path="/callback2" element={<ReactCallback2 />} />
      </Routes>
    </Router>
  );
}

export default App;
