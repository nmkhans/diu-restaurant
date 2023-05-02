import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";
import Cart from "./../pages/Cart";
import Menu from "../pages/Menu";
import CategoryPage from "./CategoryPage";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/item/:id" element={<ProductDetail />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default ApplicationRoutes;
