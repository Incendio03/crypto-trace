import React from "react";
import { Route, Routes } from "react-router";
import "react-toastify/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/HomePage.jsx";
import About from "./pages/AboutPage.jsx";
import Register from "./pages/Register.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
