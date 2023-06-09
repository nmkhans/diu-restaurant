import { Outlet, Link } from "react-router-dom";
import Layout from "./../../Layout/Layout";

const ManagerDashboardPage = () => {
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
              <Link to="/manager/dashboard">
                Product List
              </Link>
            </li>
            <li>
              <Link to="/manager/dashboard/add-product">
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/manager/dashboard/requested-food">
                Requested Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ManagerDashboardPage;
