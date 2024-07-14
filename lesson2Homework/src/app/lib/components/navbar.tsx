import React from "react";
import NavLink from "./navlink";
import { getAllBooks } from "../actions";

const Navbar = () => {
  return (
    <nav className="navbar has-background-dark">
      <NavLink className="navbar-item is-color-white" href="/">
        Home
      </NavLink>
      <NavLink className="navbar-item is-color-white" href="/books">
        Books
      </NavLink>
      <NavLink className="navbar-item is-color-white" href="/signup">
        Sign up
      </NavLink>
      <NavLink className="navbar-item is-color-white" href="login">
        Log in
      </NavLink>
    </nav>
  );
};

export default Navbar;
