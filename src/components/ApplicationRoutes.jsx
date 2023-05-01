import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default ApplicationRoutes;
