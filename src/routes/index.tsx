import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeView from "../views/home";
import ContactView from "../views/contact";
import ReduxView from "../views/redux";

export default function BasicExample() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="/redux" element={<ReduxView />} />
      </Routes>
    </Router>
  );
}
