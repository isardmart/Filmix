import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./views/Login";
import Register from "./views/Register";
import Secret from "./views/Secret";
import { URL } from "./config";
import axios from "axios";
import Series from "./views/Series";
import Movies from "./views/Movies";
import Settings from "./views/Settings";
import ErrorPage from "./views/ErrorPage";
import Search from "./views/Search";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    const verify_token = async () => {
      if (token == null) return setIsLoggedIn(false);
      try {
        axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.post(`${URL}/users/verify_token`);
        return res.data.ok ? login(token) : logout();
      } catch (e) {
        console.info(e);
      }
    };
    verify_token();
    // eslint-disable-next-line
  }, []);

  const login = (token) => {
    token && localStorage.setItem("token", JSON.stringify(token));
    setIsLoggedIn(true);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact="true"
            path="/searchmovie"
            element={<Search media_type={"movie"} /> /*Falta is loggedin */}
          />
          <Route
            exact="true"
            path="/searchseries"
            element={<Search media_type={"series"} /> /*Falta is loggedin */}
          />
          <Route
            exact="true"
            path="/"
            element={
              isLoggedIn ? <Navigate to="/browse" /> : <Login login={login} />
            }
          />
          <Route
            exact="true"
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/browse" /> : <Login login={login} />
            }
          />
          <Route
            exact="true"
            path="/register"
            element={
              isLoggedIn ? (
                <Navigate to="/browse" />
              ) : (
                <Register login={login} />
              )
            }
          />
          <Route
            exact="true"
            path="/browse"
            element={
              isLoggedIn ? <Secret logout={logout} /> : <Navigate to="/" />
            }
          />
          <Route
            exact="true"
            path="/series"
            element={
              isLoggedIn ? (
                <Secret route={"tv"} logout={logout} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            exact="true"
            path="/movies"
            element={
              isLoggedIn ? (
                <Secret route={"movies"} logout={logout} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            exact="true"
            path="/settings"
            element={
              isLoggedIn ? (
                <Settings logout={logout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact="true"
            path="/*"
            element={
              isLoggedIn ? <Navigate to="/browse" /> : <Login login={login} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
/**/
