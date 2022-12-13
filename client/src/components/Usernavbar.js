import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Byebye from '../views/Byebye'

export default function Usernavbar({ logout}) {
    const [message,setMessage]=useState('')
      useEffect(()=>{
        setTimeout(()=>{
          setMessage(<></>)
        },9000)
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
      <NavLink exact to="/browse" className="filmix">
        FILMIX
      </NavLink>
      <ul>
        <NavLink exact to="/browse">
          Home
        </NavLink>
        <NavLink exact to="/series">
          Series
        </NavLink>
        <NavLink exact to="/movies">
          Movies
        </NavLink>
        <NavLink exact to="/mylist">
          MyList
        </NavLink>
      </ul>
      <button onClick={handleLogout}>Log Out</button>
    </div>
    {message}
    </>
  );
}
