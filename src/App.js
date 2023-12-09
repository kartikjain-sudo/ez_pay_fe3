import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/BorrowRequest";
import Events from "./pages/LendingRequest";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BorrowRequest" element={<About />} />
        <Route path="/LendingRequest" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
