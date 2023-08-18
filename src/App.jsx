import PageStartApp from "Components/Pages/PageStartApp";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageStartApp />} />
      </Routes>
    </Router>
  );
}
