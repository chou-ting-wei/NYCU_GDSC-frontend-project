import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import FHH from "./components/FHH";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FHH" element={<FHH />} />
      </Routes>
    </Router>
  );
}

export default App;
