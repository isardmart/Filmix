import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../config";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/users/register`, {
        email: form.email,
        password: form.password,
        password2: form.password2,
      });
      setMessage(res.data.message);
      if (res.data.ok) {
        setTimeout(() => {
          props.login();
        }, 1500);
      }
    } catch (err) {
      console.info(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, [message]);
  return (
    <div
      className="w-100 h-[100vh] bg-center bg-no-repeat bg-cover overflow-hidden flex flex-col"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80')`,
      }}
    >
      <Navbar />
      <div className="pt-[4vh]">
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="sm:w-[70vw] md:w-[40vw] lg:w-[30vw] text-white shadow-md shadow-slate-700 gap-3 rounded-md p-6 flex flex-col self-center m-auto"
        >
          <h1 className="font-bold text-3xl pb-4">Register</h1>

          <input
            type="email"
            placeholder="Email or Phone number"
            name="email"
            className="bg-gray-800 h-[5h] w-[14w] align-self-center rounded-md transition-500ms p-2"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="bg-gray-800 h-[5h] w-[14w] align-self-center rounded-md transition-500ms p-2"
          />

          <input
            type="password"
            placeholder="Confirm Passsword"
            name="password2"
            className="bg-gray-800 h-[5h] w-[14w] align-self-center rounded-md transition-500ms p-2"
          />
          <h4 className="message">{message}</h4>

          <button className="bg-red-500 h-[6h] w-[15w] align-self-center rounded-md transition-500ms p-2 hover:scale-110 hover:text-black">
            Register
          </button>
          <div className="inline-flex justify-evenly">
            <p className="pr-5 pl-5">
              Already have an account?
            </p>
            <p className="hover:scale-110">
              <Link
                className="text-decoration-none p-2 bg-red-500 bg-opacity-40 shadow-md rounded-xl text-red-500 hover:text-orange-500 "
                exact="true"
                to="/login"
              >
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
