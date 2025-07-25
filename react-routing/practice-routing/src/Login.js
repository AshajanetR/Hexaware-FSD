import { useState } from "react"
import "./App.css";
import { useNavigate } from "react-router-dom";
 
const Login = () => {
    const nav = useNavigate();
    let [Id,setId]=useState("")
    let [password,setPassword]=useState("")
    const [newPass, setNewPass] = useState("");
 
    const handleUserId=(e)=>
    {
        setId(e.target.value)
    }
 
    const handleUserPassword=(e)=>
    {
        setPassword(e.target.value)
    }
 
    const handleNewPassword = (e) => {
  setNewPass(e.target.value);
};
 
    const Signup=()=>
    {
        localStorage.setItem(Id,password)
    }
 
    const SignIn=()=>
    {
        let p=localStorage.getItem(Id)
        if(p==password)
        {
          //  nav("/welcome",{state:{Id,password}});
          let data ={Id,password}
          localStorage.setItem("data",JSON.stringify(data))
          nav("/welcome")
        }
        else
        {
            alert("Incorrect Password Try again")
        }
    }
 
    const UpdatePassword = () => {
    let existing = localStorage.getItem(Id);
    if (existing) {
      localStorage.setItem(Id, newPass);
      alert("Password Updated Successfully");
      setNewPass("");
    } else {
      alert("User ID not found");
    }
  }
 
  return (<>
    <div className="cont">
        <input placeholder="Enter your User Id" onChange={handleUserId}/>
        <input placeholder="Enter your Password" onChange={handleUserPassword}/>
 
        <button onClick={SignIn}>SignIn</button>
        <button onClick={Signup}>SignUp</button>
 
        <br/>
        <input placeholder="Enter your New Password" onChange={handleNewPassword}/>
         <button onClick={UpdatePassword}>Update Password</button>
 
 
       
 
 
    </div>
  </>)
}
 
export default Login;