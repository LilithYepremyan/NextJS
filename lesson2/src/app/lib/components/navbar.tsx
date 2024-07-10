import Link from "next/link";
import React from "react";
import NavLink from "./navlink";

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
