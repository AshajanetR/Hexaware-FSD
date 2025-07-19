import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const nav=useNavigate();
    
    let [username,setusername]=useState();
    let [password,setpassword]=useState();
    const handlelogin=()=>{
        const data ={username,password}
        axios.post(`http://localhost:8085/api/auth/login`,data)
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem('token',res.data);
            alert('logged in succesfully!')
            nav('/')
        })
    }
  return (
    <div className='card'>
        <input type="text" required placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
        <input type="text" required placeholder='password'onChange={(e)=>setpassword(e.target.value)}/>
        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login