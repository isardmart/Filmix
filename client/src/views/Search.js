import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import Display from "./Display";
import loadingif from '.././loading.gif'

const Search = ({logout}) => {
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [isReady2, setIsReady2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({ title: "" });
  const [media, setMedia] = useState({});
  const [media2, setMedia2] = useState({});
  const [imdbid, setImdbid] = useState("");
  const [principal, setPrincipal] = useState("");

  const handleChange = (e) => setSearch({ ...search, title: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReady(false);
    setIsReady2(false);
    setMedia({});
    setMedia2({});
    setImdbid('');
    setError('')
    setLoading(true);
    findMovie(search.title);
  };
  const findMovie = async (title) => {
    let url = `${URL}/media/search`;
    try {
      const res = await axios.post(url, { title });
      let { Error, Type, imdbID } = res.data.media;
      if (Type !== "movie") {
        if (!Type) {
          setError(`Seems that your search doesn't exist`);
          setIsReady2(true)
          setTimeout(()=>{
            setError(' ');
            setLoading(false);
          },[1500])
          return setIsReady(true);
        }
        setPrincipal("tv");
        setMedia(res.data.media);
        setImdbid(imdbID);
        setError(Error);
        setLoading(false);
        return setIsReady(true);
      }
      setPrincipal("movie");
      setMedia(res.data.media);
      setImdbid(imdbID);
      setError(Error);
      setLoading(false);
      return setIsReady(true);
    } catch (error) {
      setIsReady2(true)
      setError(error.message);
      setLoading(false);
      return setIsReady(true);
    }
  };
  const findPoster = async (imdbid) => {
    let url2 = `${URL}/media2/search`;
    try {
      const res2 = await axios.post(url2, { imdbid });
      if (principal === "movie") {
        setMedia2(res2.data.media.movie_results[0]);
        return setIsReady2(true);
      } else {
        setMedia2(res2.data.media.tv_results[0]);
        return setIsReady2(true);
      }
    } catch (error) {
      setIsReady2(true)
      setError('Cannot read the input, please, try again')
    }
  };
  useEffect(() => {
    findPoster(imdbid);
  }, [imdbid]);

  return (
    <div className="text-white flex flex-col z-20 ">
      <form
        className="absolute sm:left-[80vw] sm:top-[3vh] top-[70vh] left-[20vw]  "
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold pl-2 bg-black bg-opacity-80 rounded-xl w-fit">
          Search
        </h1>
        <input
          className="border-red-500 bg-black text-white border-2 rounded-xl px-2 "
          onChange={handleChange}
          value={search.title}
        />
        <button className="px-4 hover:scale-110 p-1 mx-10 sm:mx-2 right-0 w-70 h-full text-black bg-red-500 bg-opacity-60 rounded-xl no-underline">
          Submit
        </button>
      </form>
      <div>
        {(isReady &&
          isReady2 ) ? (
            !error ? (
              <div className="z-30 absolute left-[0px] top-[64px]" >
                <Display
                  setIsReady={setIsReady}
                  setIsReady2={setIsReady2}
                  media={media}
                  media2={media2}
                  search={search.title}
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

export default Search;
