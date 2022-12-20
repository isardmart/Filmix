import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Byebye from "../views/Byebye";
import SearchButton from "./SearchButton";
import Search from "../views/Search";

export default function Usernavbar({ setPrincipal, principal }) {
  const [colorChange, setColorchange] = useState(false);
  const [clicked, setClicked] = useState(false);

  window.onscroll = () => {
    if (window.scrollY >= 12) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  return (
    <div className="fixed z-20 w-[100vw]">
      <div
        className={
          colorChange
            ? "bg-black bg-opacity-85 transition duration-700 ease-in-out"
            : " bg-transparent transition duration-700 ease-in-out"
        }
      >
        <div className="sticky top-0 w-[100vw] min-h-[8vh] bg-transparent flex flex-col sm:flex-row sm:justify-around sm:items-center items-center sm:px-30 ">
          <NavLink
            exact="true"
            to="/"
            style={{
              fontFamily:
                "'Impact', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif",
            }}
            className="filmix flex justify-start font-impact text-3xl sm:text-5xl py-5 sm:py-10 p-auto h-full text-red-500 rounded-md text-decoration-none"
          >
            FILMIX
          </NavLink>
          <ul className="relative pb-10 sm:pb-0 flex-row justify-around sm:justify-evenly">
            <NavLink
              exact="true"
              to="/series"
              onClick={() => setPrincipal("tv")}
              className={
                principal == "tv"
                  ? "px-4 hover:scale-110 py-1 mx-20 sm:mx-10 w-70 h-full text-white bg-red-500 bg-opacity-60 rounded-full no-underline"
                  : "px-4 hover:scale-110 py-1 mx-20 sm:mx-10 w-70 h-full text-black bg-red-500 bg-opacity-25 rounded-full no-underline hover:bg-opacity-55"
              }
            >
              Series
            </NavLink>
            <NavLink
              exact="true"
              to="/movies"
              onClick={() => setPrincipal("movies")}
              className={
                principal == "movies"
                  ? "px-4 hover:scale-110 py-1 mx-20 sm:mx-10 w-70 h-full text-white bg-red-500 bg-opacity-60 rounded-full no-underline"
                  : "px-4 hover:scale-110 py-1 mx-20 sm:mx-10 w-70 h-full text-black bg-red-500 bg-opacity-25 rounded-full no-underline hover:bg-opacity-55"
              }
            >
              Movies
            </NavLink>
          </ul>
          {clicked ? (
            <Search />
          ) : (
            <SearchButton setClicked={setClicked} className="absolute" />
          )}
        </div>
      </div>
    </div>
  );
}
