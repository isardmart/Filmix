import React from "react";
import Principal from "../components/Principal";
import Usernavbar from '../components/Usernavbar';

export default function Secret({logout}) {

  return (
    <div className="secret_page">
      <Usernavbar logout={logout} />
      <Principal />
    </div>
  );
}