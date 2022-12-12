import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        exact
        to="/"
        className={(navData) => (navData.isActive ? "active" : "navlink")}
      >
        Home
      </NavLink>
      <ul>
        <NavLink
          exact
          to="/login"
          className={(navData) => (navData.isActive ? "active" : "navlink")}
        >
          Login
        </NavLink>
        <NavLink
          exact
          to="/register"
          className={(navData) => (navData.isActive ? "active" : "navlink")}
        >
          Register
        </NavLink>
      </ul>
    </div>
  );
}
//<NavLink exact to='/secret' className={(navData) => (navData.isActive ? "active" : 'navlink')}>Secret</NavLink>
