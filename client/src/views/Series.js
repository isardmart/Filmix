import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import Usernavbar from "../components/Usernavbar";
import Display from "./Display";

const Series = ({ logout }) => {
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({ title: "" });
  const [media, setMedia] = useState({});
  const [media2, setMedia2] = useState({});
  const [imdbid, setImdbid] = useState("");

  const handleChange = (e) => setSearch({ ...search, title: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    findMovie(search.title);
  };
  const findMovie = async (title) => {
    let url = `${URL}/media/search`;
    try {
      const res = await axios.post(url, { title });
      let { Error, Type, imdbID } = res.data.media;
      if (Type !== "series") {
        if (!Type) {
          setError(`Seems that your series doesn't exist`);
          return setIsReady(true);
        }
        setError(`Seems that you're searching a ${Type}`);
        return setIsReady(true);
      }
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
      setMedia2(res2.data.media.tv_results[0]);
    } catch (error) {}
  };
  useEffect(() => {
    findPoster(imdbid);
  }, [imdbid]);

  return (
    <div>
      <Usernavbar logout={logout} />
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search.title} />
        <button>Submit</button>
      </form>
      {isReady ? (
        !error ? (
          <div>
            <Display media={media} media2={media2} />
          </div>
        ) : (
          <h1>{error}</h1>
        )
      ) : loading ? (
        <img
          src="https://www.organizedthemes.com/wp-content/plugins/remind-me/js/loading.gif"
          alt="loading"
        />
      ) : null}
    </div>
  );
};

export default Series;
