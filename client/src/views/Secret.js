import React,{useState} from "react";
import Usernavbar from '../components/Usernavbar';
import PrincipalMovies from "../components/PrincipalMovies";
import PrincipalSeries from "../components/PrincipalSeries";
import Footer from "../components/Footer";


export default function Secret({logout}) {
  const [principal,setPrincipal]=useState('movies')

  return (
    <div className='bg-black text-red-600 flex flex-col'>
      <Usernavbar logout={logout} setPrincipal={setPrincipal} principal={principal}/>
      {principal=='movies'? <PrincipalMovies/>:<PrincipalSeries/>}
      <Footer logout={logout} />
    </div>
  );
}