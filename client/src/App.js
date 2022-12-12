import React, { useState } from "react";
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

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout=()=>{
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
