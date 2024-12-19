import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import FHH from "./components/FHH";
import Cy407 from "./components/Cy407";
import Iris from "./components/Iris";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FHH" element={<FHH />} />
        <Route path="/iris" element={<Iris />} />
        <Route path="/Cy407" element={<Cy407 />} />
      </Routes>
    </Router>
  );
}

export default App
