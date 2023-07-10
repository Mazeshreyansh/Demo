import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Nav() {
  return (
    <nav class="navbar">
      <Link class="navbar-brand" to="/">
        Navbar
      </Link>
      <div class="nav">
        <Link class="navbar-link" to="/home">
          Home
        </Link>
        <Link class="navbar-link" to="/about">
          About
        </Link>
        <Link class="navbar-link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
