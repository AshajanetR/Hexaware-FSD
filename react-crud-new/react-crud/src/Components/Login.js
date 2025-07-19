import { useState } from "react";

const Login = () => {
  let [userId,setuserId] = useState("");
  let [pass,setPass] = useState("");
  let [newpass,setnewpass] =useState("");
  const handleUserId = (e)=>{
      setuserId(e.target.value)
  }

  const handleUserPass =(e)=>{
    setPass(e.target.value)
  }

  const signup = ()=>{
    localStorage.setItem(userId,pass);
  }
  const signIn = ()=>{
    let localpass = localStorage.getItem(userId);
    if(localpass === pass){
        alert("Welcome.");
    }else{
        alert("Try again.")
    }
  }

  const handlenewPass=(e)=>{
        setnewpass(e.target.value);
  }

  const updatePass =()=>{
    if(localStorage.getItem(userId) === pass){
        localStorage.setItem(userId,newpass);
        alert("password successfully updated.")
    }else{
        alert("invalid credentials");
    }
  }
  return (
    <div>
        <input type="text" placeholder="enter user id" onChange={handleUserId} />
        <input type="password" placeholder="enter password" onChange={handleUserPass} />
        <input type ="password" placeholder="enter new password" onChange={handlenewPass}/>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signup}>Sign Up</button>
        <button onClick={updatePass}>Update password</button>
    </div>
  )
}

export default Login;