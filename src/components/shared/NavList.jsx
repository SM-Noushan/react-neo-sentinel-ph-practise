import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavList = () => {
  const [homeLocation, setHomeLocation] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.toLowerCase().includes("home")) setHomeLocation(true);
  }, [location.pathname]);
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive || homeLocation ? "font-semibold" : "hover:underline"
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
};

export default NavList;
