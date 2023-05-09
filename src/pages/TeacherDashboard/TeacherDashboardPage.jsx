import { Outlet, Link } from "react-router-dom";
import Layout from "./../../Layout/Layout";

const TeacherDashboardPage = () => {
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
              <Link to="/teacher/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/teacher/dashboard/orders">All Orders</Link>
            </li>
            <li>
              <Link to="/teacher/dashboard/request-food">
                Request Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeacherDashboardPage;
