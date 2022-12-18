import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-[100vw] min-h-[10vh] bg-transparent flex justify-between items-center pl-15 pr-15 transition-1000ms">
      <NavLink
        exact='true'
        to="/"
        style={{ fontFamily: 'Impact' }}
        className="sticky filmix font-impact text-3xl px-15 py-10 mx-10 right-0 w-70 h-full text-red-500 rounded-md text-decoration-none"
      >
        FILMIX
      </NavLink>
    </div>
  );
}
//<NavLink exact to='/secret' className={(navData) => (navData.isActive ? "active" : 'navlink')}>Secret</NavLink>
