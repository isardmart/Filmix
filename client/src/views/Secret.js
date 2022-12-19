import React,{useState} from "react";
import Principal from "../components/Principal";
import Usernavbar from '../components/Usernavbar';
import PrincipalMovies from "../components/PrincipalMovies";
import PrincipalSeries from "../components/PrincipalSeries";


export default function Secret({logout}) {
  const [principal,setPrincipal]=useState('movies')

  return (
    <div className="flex flex-col">
      <Usernavbar logout={logout} setPrincipal={setPrincipal} principal={principal}/>
      {principal=='movies'? <PrincipalMovies/>:<PrincipalSeries/>}
    </div>
  );
}