import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../../../server/config";
import Hello from "./Hello";
import { Link } from "react-router-dom";

export default function InitialForm({login}) {
  const [message, setMessage] = useState("");
  const[hello,setHello]=useState('');
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/users/login`, {
        email: form.email,
        password: form.password,
      });
      setMessage(res.data.message);
      if (res.data.ok) {
        document.body.style.overflow = "hidden";
        setHello(<Hello/>);
        document.body.style.overflow = "scroll";
        setTimeout(() => {
          login(res.data.token);
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, [message]);
  return (
    <div>
        {hello}
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="form_container"
      >
        <h1>Log in</h1>
        <input type="email" placeholder="Email or Phone number" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <h4>{message}</h4>
        <button>Login</button>
        <p>
            Still without an account?
        <Link className="formlink" exact='true' to='/register' >Suscribe now Free!</Link>
        </p>
      </form>
    </div>
  );
}
