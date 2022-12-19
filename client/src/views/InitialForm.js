import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../config";
import Hello from "./Hello";
import { Link } from "react-router-dom";

export default function InitialForm({ login }) {
  const [message, setMessage] = useState("");
  const [hello, setHello] = useState("");
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
        setHello(<Hello />);
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
    <div className="pt-[4vh]" >
      {hello}
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="sm:w-[70vw] md:w-[40vw] lg:w-[30vw] text-white shadow-md shadow-slate-700 gap-3 rounded-md p-6 flex flex-col self-center m-auto"
      >
        <h1 className="font-bold text-3xl pb-4">Log in</h1>
        <input
          type="email"
          placeholder="Email or Phone number"
          name="email"
          className="bg-gray-800 h-[5h] w-[14w] align-self-center rounded-md transition-all-500 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="bg-gray-800 h-[5h] w-[14w] align-self-center rounded-md transition-all-500 p-2"
        />
        <h4>{message}</h4>
        <button className="bg-red-500 h-[6h] w-[15w] align-self-center rounded-md transition-all-500 hover:transition-all-1000 p-2 hover:scale-110 hover:text-black">
          Login
        </button>
        <div className="inline-flex justify-evenly">
          <p className="pr-5 pl-5">
            Still without an account?
            </p>
          <p className="hover:scale-110">
            <Link
              className="text-decoration-none p-2 bg-red-500 bg-opacity-40 shadow-md rounded-xl text-red-500 hover:text-orange-500 "
              exact="true"
              to="/register"
            >
              Suscribe now Free!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
