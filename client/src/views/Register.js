import React, { useEffect, useState } from "react";
import axios from 'axios';
import { URL } from "../config";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Register(props) {
  const[message,setMessage]=useState('')
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res=await axios.post(`${URL}/users/register`,{
        email:form.email,
        password:form.password,
        password2:form.password2
      })
      setMessage(res.data.message);
      if(res.data.ok){
        setTimeout(()=>{
          props.login()
        },1500)
      }
    } catch (err) {
      console.info(err);
    }
  };
  useEffect(()=>{
    setTimeout(()=>{
      setMessage('')
    },2000)
  },[message])
  return (
    <div className="home">
    <Navbar />
    <form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className="form_container"
    >
        <h1>Register</h1>

      <input type="email" placeholder="Email or Phone number" name="email" />

      <input type="password" placeholder="Password" name="password" />

      <input type="password" placeholder="Confirm Passsword" name="password2" />
      <h4 className="message">{message}</h4>

      <button>Register</button>
      <p>
          Already have an account?
        <Link className="formlink" exact='true' to='/login' >Log in</Link>
        </p>
    </form>
    </div>
  );
}
