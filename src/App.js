import React from "react";
import "./App.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/BorrowRequest";
import Events from "./pages/LendingRequest";

function App() {
  return (
    <Router>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 12,
        }}
      >
        <ConnectButton />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BorrowRequest" element={<About />} />
        <Route path="/LendingRequest" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
