import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
// PAGES
import Navbars from "./component/Navbars";
import HomePage from "./page/Home";
import Profile from "./page/user/Profile";
import AdminPage from "./page/AdminPage";
import ProductPage from './page/user/DetailProduct';
import AdminControlPage from "./page/admin/AdminControlPage";
import Cart from './page/user/Cart'

function App() {
  return (
    <BrowserRouter>
      <Navbars/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/add-product" element={<AdminControlPage />} />
        <Route path="/admin/add-topping" element={<AdminControlPage />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;