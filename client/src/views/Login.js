import React from "react";
import Navbar from "../components/Navbar";
import InitialForm from "./InitialForm";

export default function Login({login}) {
  return (
    <div className="w-100 h-[100vh] bg-center bg-no-repeat bg-cover overflow-hidden flex flex-col" 
    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80')` }}>
      <Navbar />
      <InitialForm login={login} />
    </div>
  );
}
