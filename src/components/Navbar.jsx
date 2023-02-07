import React from "react";
import { Link } from "react-router-dom";
import { PowerIcon } from "@heroicons/react/24/outline";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="navbar-title">
          <ul className={styles.navbar}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/done">Done</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-logout">
          <ul>
            <button onClick={logout}>
              <PowerIcon width={24} height={24} />
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
