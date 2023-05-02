import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";
import Cart from "./../pages/Cart";
import Menu from "../pages/Menu";
import CategoryPage from "./CategoryPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/item/:id" element={<ProductDetail />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default ApplicationRoutes;
