import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
