import React, { useEffect, useState } from "react";
import axios from 'axios';
import { URL } from "../config";

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
    <form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className="form_container"
    >
      <label>Email</label>
      <input type="email" name="email" />

      <label>Password</label>
      <input type="password" name="password" />

      <label>Confirm password</label>
      <input type="password" name="password2" />

      <button>Register</button>
      <h4 className="message">{message}</h4>
    </form>
  );
}
