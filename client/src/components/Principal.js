import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import { pulp_fiction } from "../config";
import Card from "./Card";

export default function Principal() {
  const [trends, setTrends] = useState([]);

  const findTrendings = async (trending) => {
    let url = `${URL}/media2/trending`;
    console.log(url)
    try {
      const res2 = await axios.post(url,{trending});
      setTrends(res2.data.media.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    findTrendings('trending');
  }, []);

  return (
    <div>
      <div className="Principal overflow-hidden ">
        <img src={pulp_fiction} alt="pulp fiction"></img>
      </div>
      <h1 className="font-bold"> Most viewed </h1>
      <div className="flex pb-5 px-5 overflow-x-auto w-[100vw] pt-4">
        {trends.map((value, idx) => {
          return <Card key={idx} {...value} />;
        })}
      </div>
    </div>
  );
}
