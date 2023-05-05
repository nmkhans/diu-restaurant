import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import RequireAdmin from "./../util/RequireAdmin";
import Home from "@/pages/Home.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";
import Cart from "./../pages/Cart";
import Menu from "../pages/Menu";
import CategoryPage from "../pages/CategoryPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import UserDashboardPage from "../pages/UserDashboard/UserDashboardPage";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import UserOrders from "../pages/UserDashboard/UserOrders";
import PaymentSuccess from "../pages/PaymentSuccess";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AdminDashboardPage from "../pages/AdminDashboard/AdminDashboardPage";
import AdminAllProducts from "../pages/AdminDashboard/AdminAllProducts";
import AdminAllOrders from "../pages/AdminDashboard/AdminAllOrders";
import AdminProductCreate from "../pages/AdminDashboard/AdminProductCreate";
import AdminProductUpdate from "../pages/AdminDashboard/AdminProductUpdate";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/item/:id" element={<ProductDetail />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/checkout"
        element={
          <RequireAuth loginPath="/login">
            <Checkout />
          </RequireAuth>
        }
      />

      <Route
        path="/payment-success/:transactionId"
        element={
          <RequireAuth loginPath="/login">
            <PaymentSuccess />
          </RequireAuth>
        }
      />

      <Route
        path="/user/dashboard"
        element={
          <RequireAuth loginPath="/login">
            <UserDashboardPage />
          </RequireAuth>
        }
      >
        <Route index element={<UserDashboard />} />
        <Route path="orders" element={<UserOrders />} />
      </Route>

      <Route
        path="/admin/dashboard"
        element={
          <RequireAdmin>
            <AdminDashboardPage />
          </RequireAdmin>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route
          path="all-products"
          element={<AdminAllProducts />}
        />
        <Route
          path="all-orders"
          element={<AdminAllOrders />}
        />
        <Route
          path="create-product"
          element={<AdminProductCreate />}
        />
        <Route
          path="update-product/:id"
          element={<AdminProductUpdate />}
        />
      </Route>
    </Routes>
  );
};

export default ApplicationRoutes;
