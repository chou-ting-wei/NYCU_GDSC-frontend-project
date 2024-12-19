import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Cy407 from "./components/Cy407";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Cy407" element={<Cy407 />} />
        <Route path="/" element={<Cy407 />} />
      </Routes>
    </Router>
  );
}

export default App
