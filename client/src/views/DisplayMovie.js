import React from 'react';
import { imgURL } from "../config";


export default function DisplayMovie({media,media2}) {
    let {
        Actors,Awards,Country,Director,Genre,Language,Metascore,Plot,Poster,
        Production, Rated, Ratings,Released,Response, Runtime, Title, Type, Website,
        Writer, Year,imdbID,imdbRating,imdbVotes
    }= media;
    let {adult,backdrop_path,overview,poster_path}=media2
  return (
    <div className='display'>
        <h1>{Title}</h1>
        <img src={`${imgURL}${poster_path}`} alt='poster'/>
        <h1>{Actors}</h1>
        <h1>{Awards}</h1>
        <h1>{imdbID}</h1>
    </div>
  )
}
//{poster_path ? (<img .... />) : null}