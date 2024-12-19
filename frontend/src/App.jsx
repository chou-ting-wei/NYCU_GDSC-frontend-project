import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import FHH from "./components/project/FHH";
import Cy407 from "./components/project/Cy407";
import Iris from "./components/project/Iris";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/FHH" element={<FHH />} />
          <Route path="/iris" element={<Iris />} />
          <Route path="/Cy407" element={<Cy407 />} />
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
