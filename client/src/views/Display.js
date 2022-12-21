import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { imgURL } from "../config";

export default function Display({
  media,
  media2,
  setIsReady,
  setIsReady2,
  setLoading,
  logout,
}) {
  let {
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Production,
    Ratings,
    Runtime,
    Title,
    Writer,
    Year,
    imdbRating,
    imdbVotes,
    BoxOffice,
    Poster
  } = media;
  console.log(media2.poster_path,Poster)
  //top-[128px]
  return (
    <div className=" hover:opacity-100 overflow-hidden transition-all duration-700 opacity-50 absolute display sm:mt-[64px] -mt-[140px] left-[0px] h-auto pb-[400px] w-[100vw] mb-[100px] ">
      <div className="h-[30px] w-[100vw] bg-gradient-to-b from-red-600 to-black"></div>
      <div className=" bg-black ">
        <button
          className="absolute right-[20px] w-[20px] h-[20px] rounded-md bg-blue-600 text-black"
          onClick={() => {
            setIsReady(false);
            setIsReady2(false);
            setLoading(false);
          }}
        >
          X
        </button>
        <div className="sm:flex-row flex-col flex justify-between px-20 gap-2 py-2">
          <div className="sm:w-[30vw]">
            <h1 className="font-bold text-4xl pl-3 text-white pb-3">{Title}</h1>
            {media2.poster_path==null  ?<img
            src={Poster}
            alt="Seems we didn't find the poster"
            className="sm:h-[55vh] h-[40vh] sm:w-[18vw] rounded-3xl border-2 border-red-500"
          />: <img
              src={`${imgURL}${media2.poster_path}`}
              alt="Seems we didn't find the poster"
              className="sm:h-[55vh] h-[40vh] sm:w-[18vw] rounded-3xl border-2 border-red-500"
            />  }
            
          </div>
          <div className="w-[25vw] flex flex-col gap-3 sm:text-lg ">
            <div>
              <h1 className="text-red-500"> Director:</h1> {Director}
            </div>
            <div>
              <h1 className="text-red-500"> Writer:</h1> {Writer}
            </div>
            <div>
              {" "}
              <h1 className="text-red-500">Actors:</h1> {Actors}
            </div>
            <div>
              {" "}
              <h1 className="text-red-500">Year:</h1> {Year}
            </div>
            <div>
              {" "}
              <h1 className="text-red-500">Genre:</h1> {Genre}
            </div>
            <div>
              {" "}
              <h1 className="text-red-500">Country:</h1> {Country}
            </div>
            <h1 className="text-red-500">Plot:</h1>
            <p>{Plot}</p>
          </div>
          <div className="w-[25vw] sm:text-lg">
            <div>
              {" "}
              <h1 className="text-red-500">Runtime: </h1> {Runtime}
            </div>
            <div>
              {" "}
              <h1 className="text-red-500">Language: </h1> {Language}
            </div>
            <div>
              {" "}
              <h1 className="text-red-500">Ratings: </h1>{" "}
              <ul>
                {" "}
                {Ratings.map((value, idx) => {
                  return (
                    <li key={idx}>
                      {value.Source}: {value.Value}
                    </li>
                  );
                })}
                <li> Imdb Rating: {imdbRating}</li>
                <li> Imdb Votes: {imdbVotes}</li>
                <li> Metascore: {Metascore}</li>
              </ul>
            </div>
            <div>
              {" "}
              <h1 className="text-red-500">BoxOffice: </h1> {BoxOffice}
            </div>
            <div>
              <h1 className="text-red-500"> Awards:</h1> {Awards}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20px] top-[0px] w-[100vw] bg-gradient-to-t from-red-600 to-black"></div>
      <div className="h-[20px] top-[0px] w-[100vw] bg-gradient-to-b from-red-600 to-transparent"></div>
      <div className="fixed bottom-0 w-[100vw]  ">
        <div className="flex flex-col">
          <div className="h-[20px] top-[0px] w-[100vw] bg-gradient-to-t from-red-600 to-transparent"></div>
          <div className=" bg-gradient-to-b h-[20px] from-red-600 to-black "></div>
          <Footer logout={logout} />
        </div>
      </div>
    </div>
  );
}
//{poster_path ? (<img .... />) : null} backdrop_path,overview,
