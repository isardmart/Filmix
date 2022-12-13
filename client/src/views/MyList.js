import React from "react";
import Usernavbar from "../components/Usernavbar";

export default function MyList({logout}) {
  return (
    <div>
      <Usernavbar logout={logout} />
    </div>
  );
}
