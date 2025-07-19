import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const nav =useNavigate();
    let [username,setusername]=useState();
    let [password,setpassword]=useState();
    let[role,setrole]=useState();

    const handleSubmit =(e)=>{
       e.preventDefault();
       const data={
        username,password,role
       }
       axios.post(`http://localhost:8085/api/auth/register`,data)
       .then((res)=>{
        console.log(res)
        alert('registered succesfully')
        nav("/login")
    })
       .catch((err)=>{
        alert('error while registering')
        console.log(err)
        nav("/")
       })
    }
  return (
    <div className='card'>
       
            <input type="text" required placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
            <input type="text" required placeholder='password'onChange={(e)=>setpassword(e.target.value)}/>
            <input type="text" required placeholder='role'onChange={(e)=>setrole(e.target.value)}/>
            <button onClick={handleSubmit}>Register</button>
        
    </div>
  )
}

export default Register;