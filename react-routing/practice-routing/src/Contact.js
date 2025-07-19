import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const nav = useNavigate();
    const handlesignin = ()=>{
         nav("/signIn")
    }
  return (
    <div>
        <p>Email : ajay@gmail.com</p>
        <p>Address : HSR Layout , Bengaluru</p>
        <button onClick={handlesignin}>SignIn</button>
    </div>
  )
}

export default Contact;