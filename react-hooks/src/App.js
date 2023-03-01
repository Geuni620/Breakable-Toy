import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactMemo from "./ReactMemo";
import {ReactCallback1, ReactCallback2} from "./ReactCallback";
import {ReactReducer} from "./ReactReducer";
import {ReactRef1, ReactRef2, ReactRef3} from "./ReactRef";
import {ReactClass} from "./ReactClass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactReducer />} />
        <Route path="/memo" element={<ReactMemo />} />
        <Route path="/callback1" element={<ReactCallback1 />} />
        <Route path="/callback2" element={<ReactCallback2 />} />
        <Route path="/ref1" element={<ReactRef1 />} />
        <Route path="/ref2" element={<ReactRef2 />} />
        <Route path="/ref3" element={<ReactRef3 />} />
        <Route path="/class" element={<ReactClass />} />
      </Routes>
    </Router>
  );
}

export default App;
