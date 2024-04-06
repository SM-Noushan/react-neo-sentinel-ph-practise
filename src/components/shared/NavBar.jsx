import { Link, NavLink } from "react-router-dom";
import userDefaultIcon from "/assets/user.png";

const NavList = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "font-semibold" : "hover:underline"
      }
    >
      <li>Home</li>
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "font-semibold" : "hover:underline"
      }
    >
      <li>About</li>
    </NavLink>
    <NavLink
      to="/career"
      className={({ isActive }) =>
        isActive ? "font-semibold" : "hover:underline"
      }
    >
      <li>Career</li>
    </NavLink>
  </>
);
const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-dark-03 text-lg"
          >
            {NavList}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-dark-03 text-lg gap-4">
          {NavList}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end mt-1.5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-14 rounded-full">
              <img alt="user-icon" src={userDefaultIcon} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-0 bg-gray-200 rounded-box  w-28 *:w-full"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <Link
          to="/login"
          className="btn bg-dark-02 hover:bg-stone-800 px-10 text-white text-xl font-semibold rounded-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
