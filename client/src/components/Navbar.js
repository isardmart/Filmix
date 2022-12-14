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
    </div>
  );
}
//<NavLink exact to='/secret' className={(navData) => (navData.isActive ? "active" : 'navlink')}>Secret</NavLink>
