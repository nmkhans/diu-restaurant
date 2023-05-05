import { Outlet, Link } from "react-router-dom";
import Layout from "./../../Layout/Layout";

const UserDashboardPage = () => {
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input
          id="user-dashboard"
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
            htmlFor="user-dashboard"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            <li>
              <Link to="/user/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/user/dashboard/orders">Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserDashboardPage;
