import PageAboutMeApp from "Components/Pages/PageAboutMeApp";
import PageStartApp from "Components/Pages/PageStartApp";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<PageStartApp />}></Route>
          <Route path="/SobreMim" element={<PageAboutMeApp />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
