import React, { useState, useEffect } from "react";
import Usernavbar from "../components/Usernavbar";
import PrincipalMovies from "../components/PrincipalMovies";
import PrincipalSeries from "../components/PrincipalSeries";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../config";
import FetchingData from "../components/FetchingData";

export default function Secret({ logout }) {
  const [principal, setPrincipal] = useState("movies");
  const [time_window, setTime_window] = useState("week");
  const [movieFetched,setMovieFetched] =useState(false);
  const [serieFetched,setSerieFetched] =useState(false);


  const findMovies = async () => {
    let url = `${URL}/media2/trending`;
    try {
      const body = { media_type: "movie", time_window };
      const res = await axios.post(url, body);
      if (res) {
        localStorage.setItem("movie", JSON.stringify(res.data.media.results));
        setMovieFetched(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const findSeries = async () => {
    let url = `${URL}/media2/trending`;
    try {
      const body = { media_type: "tv", time_window };
      const res2 = await axios.post(url, body);
      if (res2) {
        localStorage.setItem("tv", JSON.stringify(res2.data.media.results));
        setSerieFetched(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    findMovies();
    findSeries();
  }, []);
  useEffect(() => {
    findMovies();
    findSeries();
  }, [time_window]);

  return (
    <div className="bg-black text-red-600 flex flex-col">
      <Usernavbar
        logout={logout}
        setPrincipal={setPrincipal}
        principal={principal}
        setTime_window={setTime_window}
      />
      {principal == "movies" ? (
        movieFetched?
        <PrincipalMovies />:<FetchingData />
      ) : (
        serieFetched?
        <PrincipalSeries />:<FetchingData />
      )}
      <Footer logout={logout} />
    </div>
  );
}
