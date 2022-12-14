import React from "react";
import Navbar from "../components/Navbar";
import InitialForm from "./InitialForm";

export default function Login({login}) {
  return (
    <div className="home">
      <Navbar />
      <InitialForm login={login} />
    </div>
  );
}
