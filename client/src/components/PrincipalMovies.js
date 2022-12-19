import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import Card from "./Card";
import ResponsiveSlider from "./ResponsiveSlider.js";

export default function PrincipalMovies() {
  const [trends, setTrends] = useState([]);
  const [time_window, setTime_window] = useState("week");
  const [ready, setReady] = useState(false);

  const findTrendings = async () => {
    let url = `${URL}/media2/trending`;
    try {
      const body = { media_type: "movie", time_window };
      const res2 = await axios.post(url, body);
      if (res2) {
        setTimeout(() => {
          setTrends(res2.data.media.results);
          setReady(true);
        }, [1000]);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    findTrendings();
  }, []);

  return (
    <>
      {ready ? (
        <div>
          <ResponsiveSlider trends={trends} />
          <div>
            <h1 className="font-bold text-4xl p-4"> Trending </h1>
            <div className="flex pb-5 px-5 overflow-x-auto w-[100vw] pt-4 ">
              {trends.map((value, idx) => {
                return <Card key={idx} {...value} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className=" h-[100vh] w-[100vw] flex justify-center">
          <p className="mx-auto my-auto font-bold text-4xl">
            Fetching data ...
          </p>
        </div>
      )}
    </>
  );
}
