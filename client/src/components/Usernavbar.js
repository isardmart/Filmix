import React from "react";
import { NavLink } from "react-router-dom";

export default function Usernavbar() {
  return (
    <div className="navbar">
      <NavLink exact to="/browse" className="filmix">
        FILMIX
      </NavLink>
      <ul >
        <NavLink exact to="/browse">
          Home
        </NavLink>
        <NavLink exact to="/series">
          Series
        </NavLink>
        <NavLink exact to="/movies">
          Movies
        </NavLink>
      </ul>
    </div>
  );
}
