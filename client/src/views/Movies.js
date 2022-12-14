
import React, { useState } from 'react';
import axios from 'axios';
import { URL } from '../config';

const Movies = () => {
  const [ error, setError ] = useState('');
  const [ isReady, setIsReady ] = useState(false);
  const [ loading, setLoading ] = useState(false);
  const [ movie, setMovie ] = useState({
    title: '',
    year: '',
    movie: ''
  });

  const handleChange = (e) => setMovie({ ...movie, movie: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    findMovie(movie.movie);
  };
  const findMovie = async (title) => {
    let url = `${URL}/movies/search`;
    try {
      const res = await axios.post(url,{title});
      let { Title, Year, Error } = res.data.movie;
      setMovie({ title: Title, year: Year, movie:'' });
      setIsReady(true);
      setError(Error);
      console.log(res.data,Title,Year);
    } catch (error) {
      setError(error.message);
      setIsReady(true);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={movie.movie} />
        <button>Submit</button>
      </form>
      {isReady ? !error ? (
        <div>
          <h1>Title:{movie.title}</h1>
          <h1>Release year:{movie.year}</h1>
        </div>
      ) : (
        <h1>{error}</h1>
      ) : loading ? (
        <img src="https://www.organizedthemes.com/wp-content/plugins/remind-me/js/loading.gif" alt="loading" />
      ) : null}
    </div>
  );
};

export default Movies;