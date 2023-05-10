import { Outlet, Link } from "react-router-dom";
import Layout from "./../../Layout/Layout";

const AdminDashboardPage = () => {
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input
          id="admin-dashboard"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Layout>
            <Outlet />
          </Layout>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="admin-dashboard"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            <li>
              <Link to="/admin/dashboard/user-manage">
                Manage users
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/all-products">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/all-orders">All Orders</Link>
            </li>
            <li>
              <Link to="/admin/dashboard/create-product">
                Create Product
              </Link>
            </li>
            <li>
              <Link to="/admin/dashboard/requested-food">
                Requested Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboardPage;
