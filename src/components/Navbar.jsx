//? Library

import React from "react";
import { Link } from "react-router-dom";
import { PowerIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { logout } from "../app/feaures/userReducer";
import Cookies from "js-cookie";

// Styles
import styles from "../styles/module/Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const logMeOut = () => {
    dispatch(logout());
    Cookies.remove("isLoggedIn");

    window.location.reload();
  };
  return (
    <nav>
      <div className={styles.roots}>
        <div className={styles.wrapper}>
          <h1 className="todo-text">Todos</h1>
        </div>
        <div className={styles.wrapper2}>
          <ul className={styles.navbar}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/done">Done</Link>
            </li>
            <PowerIcon
              onClick={logMeOut}
              width={24}
              height={24}
              style={{ cursor: "pointer", color: "white" }}
            ></PowerIcon>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
