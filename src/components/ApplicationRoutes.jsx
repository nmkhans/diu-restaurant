import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import RequireAdmin from "./../util/RequireAdmin";
import Home from "@/pages/Home.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";
import Cart from "./../pages/Cart";
import CategoryPage from "../pages/CategoryPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Checkout from "../pages/Checkout";
import UserDashboardPage from "../pages/UserDashboard/UserDashboardPage";
import UserOrders from "../pages/UserDashboard/UserOrders";
import PaymentSuccess from "../pages/PaymentSuccess";
import AdminDashboardPage from "../pages/AdminDashboard/AdminDashboardPage";
import AdminAllOrders from "../pages/AdminDashboard/AdminAllOrders";
import AdminUserManage from "../pages/AdminDashboard/AdminUserManage";
import CafeteriaPage from "../pages/CafeteriaPage";
import TeacherDashboardPage from "./../pages/TeacherDashboard/TeacherDashboardPage";
import RequireTeacher from "./../util/RequireTeacher";
import TeacherAllOrder from "../pages/TeacherDashboard/TeacherAllOrder";
import TeacherRequest from "../pages/TeacherDashboard/TeacherRequest";
import TeacherRequestedFood from "../pages/TeacherDashboard/TeacherRequestedFood";
import AdminRequestedFood from "./../pages/AdminDashboard/AdminRequestedFood";
import TeacherProfile from "../pages/TeacherDashboard/TeacherProfile";
import UserProfile from "../pages/UserDashboard/UserProfile";
import ManagerDashboardPage from "../pages/ManagerDashboard/ManagerDashboardPage";
import ManagerAddProduct from "../pages/ManagerDashboard/ManagerAddProduct";
import ManagerProductList from "../pages/ManagerDashboard/ManagerProductList";
import ManagerRequestedFood from "./../pages/ManagerDashboard/ManagerRequestedFood";
import ManagerProductUpdate from "../pages/ManagerDashboard/ManagerProductUpdate";
import RequireManager from "./../util/RequireManager";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafeteria/:name" element={<CafeteriaPage />} />
      <Route path="/item/:id" element={<ProductDetail />} />
      <Route path="/categories/:id" element={<CategoryPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
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

      {/* user dashboard management */}
      <Route
        path="/user/dashboard"
        element={
          <RequireAuth loginPath="/login">
            <UserDashboardPage />
          </RequireAuth>
        }
      >
        <Route index element={<UserProfile />} />
        <Route path="orders" element={<UserOrders />} />
      </Route>

      {/*Admin dashboard management  */}
      <Route
        path="/admin/dashboard"
        element={
          <RequireAdmin>
            <AdminDashboardPage />
          </RequireAdmin>
        }
      >
        <Route index element={<AdminAllOrders />} />
        <Route path="user-manage" element={<AdminUserManage />} />
        <Route
          path="requested-food"
          element={<AdminRequestedFood />}
        />
      </Route>

      {/* Teacher dashboard management */}
      <Route
        path="/teacher/dashboard"
        element={
          <RequireTeacher>
            <TeacherDashboardPage />
          </RequireTeacher>
        }
      >
        <Route index element={<TeacherProfile />} />
        <Route path="orders" element={<TeacherAllOrder />} />
        <Route path="request-food" element={<TeacherRequest />} />
        <Route
          path="request-food-list"
          element={<TeacherRequestedFood />}
        />
      </Route>

      {/* Manager dashboard management */}
      <Route
        path="/manager/dashboard"
        element={
          <RequireManager>
            <ManagerDashboardPage />
          </RequireManager>
        }
      >
        <Route index element={<ManagerProductList />} />
        <Route path="add-product" element={<ManagerAddProduct />} />
        <Route path="add-product" element={<ManagerAddProduct />} />
        <Route
          path="update-product/:id"
          element={<ManagerProductUpdate />}
        />
        <Route
          path="requested-food"
          element={<ManagerRequestedFood />}
        />
      </Route>
    </Routes>
  );
};

export default ApplicationRoutes;
