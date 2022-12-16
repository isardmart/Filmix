import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../server/config";
import { pulp_fiction } from "../../server/config.js";
import Card from "./Card";

export default function Principal() {
  const [trends, setTrends] = useState([]);

  const findTrendings = async () => {
    let url = `${URL}/media2/trending`;
    try {
      const res2 = await axios.get(url);
      setTrends(res2.data.media.results);
    } catch (error) {
    }
  };
  useEffect(() => {
    findTrendings();
  }, []);


  return (
    <div >
    <div className="Principal overflow-hidden ">
      <img src={pulp_fiction} alt="pulp fiction"></img>
    </div>
    <h1 className="font-bold"> Most viewed </h1>
    <div className="flex pb-5 px-5 overflow-x-auto w-[100vw] pt-4">
      {trends.map((value, idx) => {
      return <Card key={idx} {...value}/>
    })}
    </div>
    </div>
  );
}
