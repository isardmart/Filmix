import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Byebye from "../views/Byebye";
import Search from "./Search";

export default function Usernavbar({ setPrincipal,principal }) {

  const [colorChange, setColorchange] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= 12) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  return (
    <div className="fixed z-10 w-[100vw]">
      <div
        className={colorChange ? "bg-black bg-opacity-85 " : " bg-transparent"}
      >
        <div className="sticky top-0 w-[100vw] min-h-[8vh] bg-transparent flex flex-col sm:flex-row sm:justify-around items-center sm:px-30 transition-1000ms">
          <NavLink
            exact="true"
            to="/browse"
            style={{
              fontFamily:
                "'Impact', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            }}
            className="filmix flex justify-start font-impact text-3xl sm:text-5xl py-10 p-auto h-full text-red-500 rounded-md text-decoration-none"
          >
            FILMIX
          </NavLink>
          <ul className="absolute sm:relative flex-row justify-around sm:justify-evenly">
            <button
              onClick={()=>setPrincipal('tv')}
              className={principal=='tv'? "px-4 hover:scale-110 py-1 mx-10 sm:mx-2 right-0 w-70 h-full text-black bg-red-500 bg-opacity-60 rounded-full no-underline":"px-4 hover:scale-110 hover:bg-opacity-55 py-1 mx-10 sm:mx-2 right-0 w-70 h-full text-white bg-red-500 bg-opacity-25 rounded-full no-underline"}
            >
              Series
            </button>
            <button
              onClick={()=>setPrincipal('movies')}
              className={principal=='movies'? "px-4 hover:scale-110 py-1 mx-10 sm:mx-2 right-0 w-70 h-full text-black bg-red-500 bg-opacity-60 rounded-full no-underline":"px-4 hover:scale-110 hover:bg-opacity-55 py-2 mx-2 right-0 w-70 h-full text-white bg-red-500 bg-opacity-25 rounded-full no-underline"}
            >
              Movies
            </button>
          </ul>
          <div className='flex align-middle'>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
