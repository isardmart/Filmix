import React, { useState } from "react";

export default function Register(props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      props.login();
    } catch (err) {
      console.log(err);
    }
  };
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
    </form>
  );
}
