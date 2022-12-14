/*
import React from 'react';
import Usernavbar from '../components/Usernavbar';

export default function Movies({logout}) {
  return (
    <div>
      <Usernavbar logout={logout} />
    </div>
  )
}
*/
import React, {useState, useEffect} from "react";
import axios from "axios";

const App =()=> {
const [title, setTitle]=useState('')
const [year, setYear]=useState('')
const [error, setError]=useState('')

const findMovie = movie => {
  let url = `https://omdbapi.com?t=${movie}&apikey=thewdb`;
  axios
    .get(url)
    .then(res => {
      debugger
      let { Title, Year } = res.data;
      setTitle(Title)
      setYear(Year)
    })
    .catch(error => {
      debugger;
      console.log(error)
      setError(error.message);
    });
};

  useEffect(()=>{
    findMovie("The usual suspects")
  },[]
  )
  
    return (
      <div>
         <h1>Title:{title}</h1>
        <h1>Release year:{year}</h1> 
         {error && <h1>Oops, we have an error: {error}</h1>} 
      </div>
    );
  }

export default App