import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config"; 
import Display from "./Display";
import Footer from "../components/Footer";
import Usernavbar from "../components/Usernavbar";

const Search = ({ logout , media_type }) => {
  const [error, setError] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({ title: "" });
  const [media, setMedia] = useState({});
  const [media2, setMedia2] = useState({});
  const [imdbid, setImdbid] = useState("");
  const [principal,setPrincipal]=useState('')

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
      if (Type !== "movie") {
        if (!Type) {
          setError(`Seems that your search doesn't exist`);
          return setIsReady(true);
        }
        setMedia(res.data.media);
        setImdbid(imdbID);
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
      if (principal=='movie'){
      setMedia2(res2.data.media.movie_results[0]);
      }else{
        setMedia2(res2.data.media.tv_results[0]);
      }
    } catch (error) {}
  };
  useEffect(() => {
    findPoster(imdbid);
  }, [imdbid]);

  useEffect(()=>{
    setPrincipal(media_type);
  },[])

  return (
    <div className='bg-black text-white flex flex-col z-20' >
      <Usernavbar setPrincipal={setPrincipal} principal={principal}/>
      <form className='absolute top-[40vh] left-[40vw] justify-center' onSubmit={handleSubmit}>
        <h1> Search </h1>
        <input className='border-red-500 bg-black text-white border-2 rounded-xl px-2 ' onChange={handleChange} value={search.title} />
        <button className='px-4 hover:scale-110 p-1 mx-10 sm:mx-2 right-0 w-70 h-full text-black bg-red-500 bg-opacity-60 rounded-xl no-underline'>Submit</button>
      </form>
      <div>
      {isReady ? (
        !error ?  (
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
      ) : <div className='h-[90vh]'></div>}
      </div>
      <Footer className='flex mt-[100vh] bottom-0' logout={logout}/>
    </div>
  );
};

export default Search;
