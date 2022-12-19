import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-[100vw] min-h-[10vh] bg-transparent flex pl-15 pr-15 transition-1000ms">
      <NavLink
        exact='true'
        to="/"
        className="sticky text-4xl justify-around mx-auto filmix font-impact md:text-5xl px-15 py-10 md:mx-10 right-0 w-70 h-full text-red-500 rounded-md text-decoration-none"
      >
        FILMIX
      </NavLink>
    </div>
  );
}
//<NavLink exact to='/secret' className={(navData) => (navData.isActive ? "active" : 'navlink')}>Secret</NavLink>
