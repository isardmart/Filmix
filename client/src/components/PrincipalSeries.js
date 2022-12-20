import React, { useEffect, useState } from "react";
import Card from "./Card";
import ResponsiveSlider from "./ResponsiveSlider.js";

export default function PrincipalSeries({ serieFetched }) {
  return (
    <>
      <div>
        <ResponsiveSlider trends={JSON.parse(localStorage.getItem("tv"))} />
        <div>
          <h1 className="font-bold text-4xl p-4"> Trending </h1>
          <div className="flex pb-5 px-5 overflow-x-auto w-[100vw] pt-4 ">
            {JSON.parse(localStorage.getItem("tv")).map((value, idx) => {
              return <Card key={idx} {...value} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
