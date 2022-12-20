import React from "react";
import { imgURL } from "../config";

export default function Cards({ ...value }) {
  let { poster_path, title, vote_average, name } = value;
  return (
    <div className="flex flex-col pl-5 gap-2">
      <img
        className="w-[150px] h-[225px] shadow-sm rounded-md"
        src={`${imgURL}${poster_path}`}
        alt={title}
      />
      <div className="flex flex-col px-3 w-[150px]">
        <h1 className="font-bold">{title || name}</h1>
        <p className="font-normal text-slate-500">{vote_average}</p>
      </div>
    </div>
  );
}
