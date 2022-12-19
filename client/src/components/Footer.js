import React,{useEffect,useState} from "react";
import Byebye from "../views/Byebye";

export default function Footer({ logout }) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMessage(<></>);
    }, 8000);
  }, [message]);
  const handleLogout = (e) => {
    e.preventDefault();
    document.body.style.overflow = "hidden";
    setMessage(<Byebye />);
    setTimeout(() => {
      logout();
      document.body.style.overflow = "scroll";
    }, 3500);
  };
  return (
    <div className="h-[10vh] bg-black">
      <button
        onClick={handleLogout}
        className="flex justify-center mx-auto my-7 hover:scale-110 p-1.5 text-white bg-red-500 rounded-full no-underline"
      >
        Log Out
      </button>
    </div>
  );
}
