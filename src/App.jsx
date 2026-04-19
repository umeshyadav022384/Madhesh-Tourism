import React from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Siraha from "./districts_pages/Siraha.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/district/siraha" element={<Siraha/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
