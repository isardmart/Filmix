import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import Display from "./Display";
import loadingif from '.././loading.gif'


const ClickSearch = ({logout,clicked}) => {
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isReady2, setIsReady2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState({});
  const [media2, setMedia2] = useState({});
  const [imdbid, setImdbid] = useState("");
  const [principal, setPrincipal] = useState("");

  useEffect(()=>{
    handleSubmit()
  })
  const handleSubmit = () => {
    setLoading(true);
    findMovie(clicked);
  };
  const findMovie = async (title) => {
    let url = `${URL}/media/search`;
    try {
      const res = await axios.post(url, { title });
      let { Error, Type, imdbID } = res.data.media;
      if (Type !== "movie") {
        if (!Type) {
          setError(`Seems that your search doesn't exist`);
          return setIsReady(true);
        }
        setPrincipal("tv");
        setMedia(res.data.media);
        setImdbid(imdbID);
        setError(Error);
        return setIsReady(true);
      }
      setPrincipal("movie");
      setMedia(res.data.media);
      setImdbid(imdbID);
      setError(Error);
      setIsReady(true);
    } catch (error) {
      setError(error.message);
      setIsReady(true);
      console.error(error);
    }
  };
  const findPoster = async (imdbid) => {
    let url2 = `${URL}/media2/search`;
    try {
      const res2 = await axios.post(url2, { imdbid });
      if (principal == "movie") {
        setMedia2(res2.data.media.movie_results[0]);
        return setIsReady2(true);
      } else {
        setMedia2(res2.data.media.tv_results[0]);
        return setIsReady2(true);
      }
    } catch (error) {}
  };
  useEffect(() => {
    findPoster(imdbid);
  }, [imdbid]);

  return (
    <div className="text-white z-50 sticky ">
      <div>
        {(isReady &&
          isReady2 ) ? (
            !error ? (
              <div >
                <Display
                  setIsReady={setIsReady}
                  setIsReady2={setIsReady2}
                  media={media}
                  media2={media2}
                  setLoading={setLoading}
                  logout={logout}
                />
              </div>
            ) : (
              <h1 className="relative top-[60px] right-[-40px]">{error}</h1>
            )
          ) : loading ? (
            <img
              src={loadingif}
              alt="loading"
              className="relative right-[150px] w-[50px] rounded-full"
            />
          ) : null}
      </div>
    </div>
  );
};

export default ClickSearch;
