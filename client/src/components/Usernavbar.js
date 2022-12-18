import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Byebye from "../views/Byebye";

export default function Usernavbar({ logout }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMessage(<></>);
    }, 8000);
  }, [message]);

  const handleLogout = (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    setMessage(<Byebye />);
    setTimeout(() => {
      logout();
      document.body.style.overflow = "scroll";
    }, 3500);
  };
  const [colorChange, setColorchange] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= 12) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  return (
    <div className="fixed w-[100vw]">
      <div
        className={colorChange ? "bg-black bg-opacity-85 " : " bg-transparent"}
      >
        <div className="sticky top-0 w-[100vw] min-h-[8vh] bg-transparent flex justify-between items-center px-30 sm:p-auto transition-1000ms">
          <NavLink
            exact="true"
            to="/browse"
            style={{
              fontFamily:
                "'Impact', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            }}
            className="sticky filmix font-impact text-3xl sm:text-2xl px-15 py-10 sm:p-auto mx-10 right-0 w-70 h-full text-red-500 rounded-md text-decoration-none"
          >
            FILMIX
          </NavLink>
          <ul className="flex row justify-evenly">
            <NavLink
              exact="true"
              to="/series"
              className="px-4 hover:scale-110 py-2 mx-2 right-0 w-70 h-full text-white bg-red-500 rounded-full no-underline"
            >
              Series
            </NavLink>
            <NavLink
              exact="true"
              to="/movies"
              className="px-4 hover:scale-110 py-2 mx-2 right-0 w-70 h-full text-white bg-red-500 rounded-full no-underline"
            >
              Movies
            </NavLink>
          </ul>
          <button
            onClick={handleLogout}
            className="px-4 hover:scale-110 py-2 mx-2 right-0 w-70 h-full text-white bg-red-500 rounded-full no-underline"
          >
            Log Out
          </button>
        </div>
      </div>
      {message}
    </div>
  );
}
