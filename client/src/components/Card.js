import React, { useState } from "react";
import { imgURL } from "../config";
import ClickSearch from "../views/ClickSearch";

export default function Cards({ ...value }) {
  const[clicked,setClicked]=useState(false)
  let { poster_path, backdrop_path, title, vote_average, name } = value;
  const smallImageQuery = window.matchMedia("(max-width: 640px)");

  return (
    <>
    {clicked ? <div className="fixed left-0 top-[6vh] m-0 p-0 w-[100vw]">{<ClickSearch clicked={localStorage.getItem('display')}/>}</div>: null}
    <button onClick={()=>{setClicked(true);localStorage.setItem('display',JSON.stringify(title||name))}} className=" flex flex-col px-5 gap-2 ">
      {smallImageQuery.matches ? (
        <img
          className="w-[150px] h-[225px] shadow-sm rounded-md "
          src={`${imgURL}${backdrop_path}`}
          alt={title}
        />
      ) : (
        <img
          className="w-[150px] h-[225px] shadow-sm rounded-md hover:shadow-red-500 hover:shadow-xl"
          src={`${imgURL}${poster_path}`}
          alt={title}
        />
      )}
      <div className="flex flex-col px-3 w-[150px]">
        <h1 className="font-bold">{title || name}</h1>
        <p className="font-normal text-slate-500">{vote_average}</p>
      </div>
    </button>
    </>
  );
}
