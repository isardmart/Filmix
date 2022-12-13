import React, { useState, useEffect } from "react";
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
import { URL } from "./config";
import axios from "axios";
import Series from "./views/Series";
import Movies from "./views/Movies";
import MyList from "./views/MyList";
import Settings from "./views/Settings";

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
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn ? <Navigate to="/browse" /> : <Home />}
          />
          <Route
            exact
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/browse" /> : <Login login={login} />
            }
          />
          <Route
            exact
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
            exact
            path="/browse"
            element={
              isLoggedIn ? (
                <Secret logout={logout}  />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            exact
            path="/series"
            element={isLoggedIn ? <Series logout={logout} /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/movies"
            element={isLoggedIn ? <Movies logout={logout} /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/mylist"
            element={isLoggedIn ? <MyList logout={logout} /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/settings"
            element={isLoggedIn ? <Settings logout={logout} /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}
