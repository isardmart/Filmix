import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Byebye from '../views/Byebye'

export default function Usernavbar({ logout}) {
    const [message,setMessage]=useState('')
      useEffect(()=>{
        setTimeout(()=>{
          setMessage(<></>)
        },8000)
      },[message])

  const handleLogout = (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    setMessage(<Byebye/>);
    setTimeout(() => {
      logout();
      document.body.style.overflow = "scroll";
    }, 3500);
  };
  const [colorChange, setColorchange] = useState(false);
  window.onscroll = () =>{
     if(window.scrollY >= 12){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
    };
    
    
  return (
    <>
    <div className={colorChange ? 'navbar colorChange' : 'navbar'} >
      <NavLink exact='true' to="/browse" className="filmix">
        FILMIX
      </NavLink>
      <ul className="navlink">
        <NavLink exact='true' to="/browse">
          Home
        </NavLink>
        <NavLink exact='true' to="/series">
          Series
        </NavLink>
        <NavLink exact='true' to="/movies">
          Movies
        </NavLink>
        <NavLink exact='true' to="/episodes">
          Episodes
        </NavLink>
      </ul>
      <button onClick={handleLogout}>Log Out</button>
    </div>
    {message}
    </>
  );
}
