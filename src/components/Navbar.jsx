//? Library

import React from "react";
import { Link } from "react-router-dom";
import { PowerIcon } from "@heroicons/react/24/outline";

//? Styles

import styles from "../styles/modules/Navbar.module.css";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav>
      <div className={styles.navWrapper}>
        <div className={styles.navbarTitle}>
          <ul className={styles.navbar}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/done">Task Done</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <div className={styles.navbarLogout}>
              <button onClick={logout}>
                <PowerIcon width={24} height={24} />
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div className={styles.logo}>
        <h1 className="todo-text">Todos</h1>
      </div>
    </nav>
  );
};

export default Navbar;
