import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav>
      <div>
        <ul className={styles.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/done">Done</Link>
          </li>
          <li>
            <Link to="/aboutdetail">About</Link>
          </li>
          <li>
            <ArrowRightOnRectangleIcon
              onClick={logout}
              width={24}
              height={24}
              style={{ cursor: "pointer" }}
            ></ArrowRightOnRectangleIcon>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
