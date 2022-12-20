import React from 'react';
import { imgURL } from "../config";


export default function Display({media,media2}) {
    let {
        Actors,Awards,Country,Director,Genre,Language,Metascore,Plot,Poster,
        Production, Rated, Ratings,Released,Response, Runtime, Title, Type, Website,
        Writer, Year,imdbID,imdbRating,imdbVotes
    }= media;
  return (
    <div className='display'>
        <h1>{Title}</h1>
        <img src={media2?(`${imgURL}${media2.poster_path}`):null} alt='poster'/>
        <h1>{Actors}</h1>
        <h1>{Awards}</h1>
        <h1>{imdbID}</h1>
    </div>
  )
}
//{poster_path ? (<img .... />) : null} backdrop_path,overview,