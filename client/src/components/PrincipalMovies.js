import React from "react";
import Card from "./Card";
import ResponsiveSlider from "./ResponsiveSlider.js";

export default function PrincipalMovies() {
  return (
    <div className="text-white">
      <ResponsiveSlider
        className="z-1"
        trends={JSON.parse(localStorage.getItem("movie"))}
      />
      <div className="sticky z-10">
        <div className="-mt-20 sm:-mt-72">
          <h1 className="font-bold text-4xl p-4 text-red-500 bg-gradient-to-b from-transparent to-black">
            {" "}
            Trending{" "}
          </h1>
          <div className="flex pb-5 px-5 overflow-x-auto w-[100vw] pt-4 bg-black">
            {JSON.parse(localStorage.getItem("movie")).map((value, idx) => {
              return <Card key={idx} {...value} />;
            })}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-4xl p-4 text-red-500"> Top Rated </h1>
          <div className="flex pb-5 px-5 overflow-x-auto w-[100vw] pt-4 ">
            {JSON.parse(localStorage.getItem("top_movies")).map(
              (value, idx) => {
                return <Card key={idx} {...value} />;
              }
            )}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-4xl p-4 text-red-500"> Upcoming </h1>
          <div className="flex pb-5 px-5 overflow-x-auto w-[100vw] pt-4 ">
            {JSON.parse(localStorage.getItem("upcoming_movies")).map(
              (value, idx) => {
                return <Card key={idx} {...value} />;
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
/*


*/
