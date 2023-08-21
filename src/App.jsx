import PageAboutMeApp from "Components/Pages/PageAboutMeApp";
import ProjetcApp from "Components/Pages/PageProjectsApp";
import PageStartApp from "Components/Pages/PageStartApp";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageStartApp />}></Route>
          <Route path="/SobreMim" element={<PageAboutMeApp />}></Route>
          <Route path="/Projetos" element={<ProjetcApp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
