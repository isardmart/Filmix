import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';


export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='homelink navbar'>
        <h1>WELCOME TO FILMIX</h1>
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
    </div>
  )
}
