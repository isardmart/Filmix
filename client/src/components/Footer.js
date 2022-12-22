import React,{useEffect,useState} from "react";
import { NavLink } from "react-router-dom";
import Byebye from "../views/Byebye";

export default function Footer({ logout }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMessage(<></>);
    }, 8000);
  }, [message]);
  const handleLogout = () => {
    document.body.style.overflow = "hidden";
    setMessage(<Byebye />);
    setTimeout(() => {
      logout();
      document.body.style.overflow = "scroll";
    }, 1500);
  };
  return (
    <div className="z-50">{message}
    <div className="h-[10vh]  bg-black">
      <button
      onClick={()=>handleLogout()}
      className="flex justify-center w-[100px] mx-auto my-7 hover:scale-110 p-1.5 text-white bg-red-500 rounded-full no-underline"
      >
        Log Out
      </button>
    </div>
    </div>
  );
}
