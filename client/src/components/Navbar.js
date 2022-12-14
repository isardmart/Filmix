import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        exact='true'
        to="/"
        className='filmix'
      >
        FILMIX
      </NavLink>
      <ul className="navlink">
        <NavLink
          exact='true'
          to="/login"
          className={(navData) => (navData.isActive ? "active" : "navlink")}
        >
          Login
        </NavLink>
        <NavLink
          exact='true'
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
