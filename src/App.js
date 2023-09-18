import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./pages/components/Footer";
import "./App.css";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Navbar from "./pages/components/Navbar";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
