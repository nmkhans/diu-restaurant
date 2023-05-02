import ApplicationRoutes from "./components/ApplicationRoutes";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import Images from "./util/Images";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

function NavigationLinks() {
  return (
    <>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <a className="block w-full">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0}>Categories</label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[300px]"
            >
              <li>
                <Link to="/categories/breakfirst">Breakfirst</Link>
              </li>
              <li>
                <Link to="/categories/lunch">Luch</Link>
              </li>
              <li>
                <Link to="/categories/dinner">Dinner</Link>
              </li>
            </ul>
          </div>
        </a>
      </li>
    </>
  );
}

const App = () => {
  const { cart } = useSelector((state) => state.cart);

  let cartTotal = 0;
  for (let item in cart) {
    cartTotal += cart[item].quantity;
  }

  return (
    <>
      <header className="drawer drawer-end">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-base-100 shadow-lg py-3 px-7 min-h-[5rem]">
            {/* Navigation */}
            <div className="flex-1 hidden lg:block">
              <ul className="menu menu-horizontal">
                {<NavigationLinks />}
              </ul>
            </div>

            {/* Logo */}
            <div className="flex-1 px-2 mx-2">
              <Link to="/">
                <img className="w-28" src={Images.logo} alt="Logo" />
              </Link>
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
                    <div className="badge badge-primary absolute -top-1 right-0 text-white">
                      {cartTotal}
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

        {/* Mobile menu */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-base-100 relative">
            <NavigationLinks />
            <div>
              <ul className="menu menu-horizontal shadow-md rounded-lg w-full justify-center mt-20 p-4">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <Link to="/wish-list">
                    <AiOutlineHeart className="text-2xl" />
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="relative">
                    <div className="badge badge-primary absolute -top-1 right-0 text-white">
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
          </ul>
        </div>
      </header>
      <Toaster />
    </>
  );
};

export default App;
