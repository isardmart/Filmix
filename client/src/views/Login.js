import React,{useState} from 'react'

export default function Login(props) {
    const [form,setForm]=useState({
        email:'',
        password:'',
    })
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            props.login()
        }catch(err){
            console.log(err)
        }
    }
  return (
    <form onChange={handleChange} onSubmit={handleSubmit} className='form_container'>
        <label>Email</label>
        <input type='email' name='email'/>

        <label>Password</label>
        <input type='password' name='password'/>

        <button>Login</button>

    </form>
  );
}
