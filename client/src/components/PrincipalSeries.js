import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import Card from "./Card";
import ResponsiveSlider from "./ResponsiveSlider.js";

export default function PrincipalSeries() {
  const [trends, setTrends] = useState([]);
  const [time_window,setTime_window]=useState('week');

  const findTrendings = async () => {
    let url = `${URL}/media2/trending`;
    console.log(url)
    try {
      const body={media_type:'tv',time_window}
      const res2 = await axios.post(url,body);
      console.log(res2.data.media.results)
      setTrends(res2.data.media.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    findTrendings();
  }, []);

  return (
    <div>
      {trends ? <ResponsiveSlider trends={trends}/>:null}
      <h1 className='font-bold text-4xl'> Trending </h1>
      <div className="flex pb-5 px-5 overflow-x-auto w-[100vw] pt-4">
        {trends.map((value, idx) => {
          if(value.media_type=='tv'){
          return <Card key={idx} {...value} />;
          }
        })}
      </div>
    </div>
  );
}
