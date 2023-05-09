import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Images from "../util/Images";
import { useSelector } from "react-redux";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";
import ProfileMenu from "./ProfileMenu";

function NavigationLinks() {
  return (
    <>
      <li>
        <a className="block w-full">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0}>Cafeteria</label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[300px]"
            >
              <li>
                <Link to="/cafeteria/cafe-fastfood">
                  Cafe Fastfood
                </Link>
              </li>
              <li>
                <Link to="/cafeteria/cafe-chinese">Cafe Chinese</Link>
              </li>
            </ul>
          </div>
        </a>
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
              <li>
                <Link to="/categories/drinks">Drinks</Link>
              </li>
            </ul>
          </div>
        </a>
      </li>
    </>
  );
}

// eslint-disable-next-line react/prop-types
const Header = ({ children }) => {
  const [desktopMenu, setDekstopMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { cart } = useSelector((state) => state.cart);

  let cartTotal = 0;
  for (let item in cart) {
    cartTotal += cart[item].quantity;
  }

  const isAuthenticated = useIsAuthenticated()();
  const user = useAuthUser()();

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
                <li>
                  <Link to="/cart" className="relative">
                    <div className="badge badge-primary absolute top-2 right-0 text-white">
                      {cartTotal}
                    </div>
                    <AiOutlineShoppingCart className="text-2xl" />
                  </Link>
                </li>
                <li>
                  {isAuthenticated ? (
                    <div
                      onMouseEnter={() => setDekstopMenu(true)}
                      onMouseLeave={() => setDekstopMenu(false)}
                      className="relative"
                    >
                      <div>
                        <img
                          className="w-20"
                          src={Images.avater}
                          alt="avater"
                        />
                      </div>
                      {desktopMenu && <ProfileMenu />}
                    </div>
                  ) : (
                    <Link to="/login">Log in</Link>
                  )}
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
          {children}
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
                <li>
                  <Link to="/cart" className="relative">
                    <div className="badge badge-primary absolute -top-1 right-0 text-white">
                      0
                    </div>
                    <AiOutlineShoppingCart className="text-2xl" />
                  </Link>
                </li>
                <li>
                  {isAuthenticated ? (
                    <div
                      onClick={() => setMobileMenu(!mobileMenu)}
                      className="relative"
                    >
                      <div>Account</div>
                      {mobileMenu && <ProfileMenu />}
                    </div>
                  ) : (
                    <Link to="/login">Log in</Link>
                  )}
                </li>
                <li>
                  <div>
                    {user?.role === "user" && (
                      <label
                        htmlFor="user-dashboard"
                        className="btn btn-sm btn-primary drawer-button text-white lg:hidden"
                      >
                        Open menu
                      </label>
                    )}
                    {user?.role === "admin" && (
                      <label
                        htmlFor="admin-dashboard"
                        className="btn btn-sm btn-primary drawer-button text-white lg:hidden"
                      >
                        Open menu
                      </label>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
