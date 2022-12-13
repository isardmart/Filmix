import React from "react";
import Principal from "../components/Principal";

export default function Secret(props) {
  return (
    <div className="secret_page">
      <Principal />
      <footer>
        <button onClick={() => props.logout()}>Log Out</button>
      </footer>
    </div>
  );
}
