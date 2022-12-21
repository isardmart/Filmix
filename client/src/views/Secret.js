import React, { useState, useEffect } from "react";
import Usernavbar from "../components/Usernavbar";
import PrincipalMovies from "../components/PrincipalMovies";
import PrincipalSeries from "../components/PrincipalSeries";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../config";
import FetchingData from "../components/FetchingData";

export default function Secret({ logout, route }) {
  const [principal, setPrincipal] = useState("tv");
  const [time_window, setTime_window] = useState("week");
  const [movieFetched, setMovieFetched] = useState(false);
  const [serieFetched, setSerieFetched] = useState(false);
  const [topMovieFetched,setTopMovieFetched]=useState(false);
  const [topSerieFetched,setTopSerieFetched]=useState(false);
  const [upcomingMovieFetched,setUpcomingMovieFetched]=useState(false);
  const [upcomingSerieFetched,setUpcomingSerieFetched]=useState(false);

  const [waitRoute, setWaitRoute] = useState(false);

  const findMovies = async () => {
    let url = `${URL}/media2/trending`;
    try {
      const body = { media_type: "movie", time_window };
      const res1 = await axios.post(url, body);
      if (res1) {
        localStorage.setItem("movie", JSON.stringify(res1.data.media.results));
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

  const findTopMovies =async()=>{
    let url = `${URL}/media2/fetch`;
    try {
      const body= {media_type :"movie" , action:"top_rated"};
      const res3 = await axios.post(url, body);
      if (res3) {
        localStorage.setItem("top_movies", JSON.stringify(res3.data.media.results));
        setTopMovieFetched(true);
      }
    } catch (error) {
      console.error(error);
    };
  };
  const findTopSeries =async()=>{
    let url2 = `${URL}/media2/fetch`;
    try {
      const body= {media_type :"tv" , action:"top_rated"};
      const res4 = await axios.post(url2, body);
      if (res4) {
        localStorage.setItem("top_tv", JSON.stringify(res4.data.media.results));
        setTopSerieFetched(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const findUpcomingMovies =async()=>{
    let url = `${URL}/media2/fetch`;
    try {
      const body= {media_type :"movie" , action:"upcoming"};
      const res5 = await axios.post(url, body);
      if (res5) {
        console.log(res5.data.media)
        localStorage.setItem("upcoming_movies", JSON.stringify(res5.data.media.results));
        setUpcomingMovieFetched(true);
      }
    } catch (error) {
      console.error(error);
    };
  };
  const findUpcomingSeries =async()=>{
    let url2 = `${URL}/media2/fetch`;
    try {
      const body= {media_type :"tv" , action:"airing_today"};
      const res6 = await axios.post(url2, body);
      if (res6) {
        localStorage.setItem("upcoming_tv", JSON.stringify(res6.data.media.results));
        setUpcomingSerieFetched(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("movie")) &&  JSON.parse(localStorage.getItem("top_movies"))&&JSON.parse(localStorage.getItem("upcoming_movies"))) {
      setMovieFetched(true);
      setTopMovieFetched(true);
      setUpcomingMovieFetched(true);
    } else {
      findMovies();
      findTopMovies();
      findUpcomingMovies();
    }
    if (JSON.parse(localStorage.getItem("tv")) && JSON.parse(localStorage.getItem("top_tv"))&& JSON.parse(localStorage.getItem("upcoming_tv"))) {
      setSerieFetched(true);
      setTopSerieFetched(true);
      setUpcomingSerieFetched(true);
    } else {
      findSeries();
      findTopSeries();
      findUpcomingSeries();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (route) {
      setPrincipal(route);
    }
    setWaitRoute(true);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-black text-red-600 flex flex-col">
      <Usernavbar
        logout={logout}
        setPrincipal={setPrincipal}
        principal={principal}
        setTime_window={setTime_window}
      />
      {waitRoute ? (
        principal === "movies" ? (
          movieFetched ? (topMovieFetched && upcomingMovieFetched ? (
            <PrincipalMovies />
          ) : (
            <FetchingData />
          )
        ) : null ): serieFetched ? (topSerieFetched && upcomingSerieFetched ? (
          <PrincipalSeries />
        ) : (
          <FetchingData />
        )
      ) : null ): null}
      <Footer logout={logout} />
    </div>
  );
}
