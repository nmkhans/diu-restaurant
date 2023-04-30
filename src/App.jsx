import ApplicationRoutes from "./components/ApplicationRoutes";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

const App = () => {
  return (
    <>
      <header className="drawer drawer-end">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-100 shadow-lg py-5 px-7">
            {/* Navigation */}
            <div className="flex-1 hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>Categories</a>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div className="flex-1 px-2 mx-2">
              <Link to="/">DUI Restaurant</Link>
            </div>

            {/* profile */}
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <Link to="/wish-list">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="relative">
                    <div className="badge badge-primary absolute -top-1 right-0">
                      0
                    </div>
                    <AiOutlineShoppingCart className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link to="/login">Log in</Link>
                </li>
              </ul>
            </div>

            <div className="flex-none lg:hidden mobile__icon">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <ApplicationRoutes />
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default App;
