import React, { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Secret from "./views/Secret";
import Navbar from "./components/Navbar";
import {URL} from './config';
import axios from "axios";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = JSON.parse(localStorage.getItem('token'))

  useEffect(()=>{
  const verify_token =async()=>{
    if (token ==null) setIsLoggedIn(false);
    try{
      axios.defaults.headers.common['Authorization']=token;
      const res= await axios.post(`${URL}/users/verify_token`)
      return res.data.ok ? login(token):logout()
    }catch(e){
      console.info(e)
    }
  };
  verify_token();
},[])

  const login = (token) => {
    token && localStorage.setItem('token',JSON.stringify(token));
    setIsLoggedIn(true);
  };
  const logout=()=>{
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Login login={login} />
            }
          />
          <Route
            exact
            path="/register"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Register login={login} />
            }
          />
          <Route
            exact
            path="/secret"
            element={
              !isLoggedIn ? <Navigate to="/" /> : <Secret logout={logout} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
