import React from "react";
import { imgURL } from "../config";

export default function Cards({ ...value }) {
  let { poster_path, backdrop_path, title, vote_average, name } = value;
  const smallImageQuery = window.matchMedia("(max-width: 640px)");

  return (
    <div className="flex flex-col pl-5 gap-2">
      {smallImageQuery.matches ? (
        <img
          className="w-[150px] h-[225px] shadow-sm rounded-md"
          src={`${imgURL}${backdrop_path}`}
          alt={title}
        />
      ) : (
        <img
          className="w-[150px] h-[225px] shadow-sm rounded-md"
          src={`${imgURL}${poster_path}`}
          alt={title}
        />
      )}
      <div className="flex flex-col px-3 w-[150px]">
        <h1 className="font-bold">{title || name}</h1>
        <p className="font-normal text-slate-500">{vote_average}</p>
      </div>
    </div>
  );
}
