import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// PAGES
import Navbars from "./component/Navbars";
import HomePage from "./page/Home";
import AdminPage from "./page/AdminPage";
import AdminControlPage from "./page/admin/AdminControlPage";

function App() {
  return (
    <BrowserRouter>
      <Navbars/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/add-product" element={<AdminControlPage />} />
        <Route path="/admin/add-topping" element={<AdminControlPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;