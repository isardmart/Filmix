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
    Ratings,
    Runtime,
    Title,
    Writer,
    Year,
    imdbRating,
    imdbVotes,
    BoxOffice,
    Poster,
  } = media;
  //top-[128px]
  return (
    <div className="mt-24 overflow-x-scroll sm:overflow-y-scroll sticky top-10 sm:top-0 z-50 hover:opacity-100 sm:overflow-hidden transition-all duration-700 sm:opacity-50 sm:absolute display sm:mt-[64px] sm:left-[0px] sm:h-auto sm:pb-[400px] sm:w-[100vw] sm:mb-[100px] ">
      <div className="h-[10px] w-[200vw] sm:h-[30px] sm:w-[100vw] sm:top-0 bg-gradient-to-b from-red-600 to-black"></div>
      <div className="flex flex-row gap-10 w-[200vw]">
        <button
          className="absolute px-1 -right-[90vw] sm:right-20 rounded-md bg-red-600 text-black"
          onClick={() => {
            setIsReady(false);
            setIsReady2(false);
            setLoading(false);
          }}
        >
          X
        </button>
        <div className="sm:flex-row w-[100vw]  bg-black flex-row gap-5 flex justify-between px-10 sm:px-20 sm:gap-2 py-2">
          <div className="sm:w-[30vw] ">
            <h1 className="font-bold text-4xl sm:pl-3 text-white pb-3">{Title}</h1>
            {media2 == null ? (
              <img
                src={Poster}
                alt="Sorry, seems we didn't find the poster"
                className="sm:h-[55vh] h-[40vh] sm:w-[18vw] rounded-3xl shadow-xl shadow-red-500"
              />
            ) : (
              <img
                src={`${imgURL}${media2.poster_path}`}
                alt="Seems we didn't find the poster"
                className="sm:h-[55vh] h-[40vh] sm:w-[18vw] rounded-3xl shadow-xl shadow-red-500"
              />
            )}
          </div>
          <div className="w-[70vw] sm:w-[25vw] flex flex-col sm:gap-3 sm:text-lg ">
            <div>
              <h1 className="text-red-500"> Director:</h1> {Director}
            </div>
            <div>
              <h1 className="text-red-500"> Writer:</h1> {Writer}
            </div>
            <div>
              <h1 className="text-red-500">Actors:</h1> {Actors}
            </div>
            <div>
              <h1 className="text-red-500">Year:</h1> {Year}
            </div>
            <div>
              <h1 className="text-red-500">Genre:</h1> {Genre}
            </div>
            <div>
              <h1 className="text-red-500">Country:</h1> {Country}
            </div>
            <h1 className="text-red-500">Plot:</h1>
            <p>{Plot}</p>
          </div>
          <div className="w-[25vw] sm:text-lg">
            <div>
              <h1 className="text-red-500">Runtime: </h1> {Runtime}
            </div>
            <div>
              <h1 className="text-red-500">Language: </h1> {Language}
            </div>
            <div>
              <h1 className="text-red-500">Ratings: </h1>{" "}
              <ul>
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
