import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../views/home";
import ContactView from "../views/contact";

export default function BasicExample() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </Router>
  );
}
