import { useState } from "react"
import "./App.css"

const Userinfo=()=>
{
 
 let [Name,setName]=useState();
 let [age,setAge]=useState();
 let [sal,setSal] = useState();
 let [dept,setDept]= useState();
 
 
  const handleName=(e)=>
  {
   setName(e.target.value)
  }
  const handleSal=(e)=>
  {
   setSal(e.target.value)
  }
   const handleDept=(e)=>
  {
   setDept(e.target.value)
  }
  const handleAge=(e)=>
  {
   setAge(e.target.value)
  }
     
    return (<div className="cont">
 
 
        <input type="text" placeholder="Enter ur name" onChange={handleName}/>
        <input type="text" placeholder="Enter ur Age" onChange={handleAge}/>
        <input type="text" placeholder="Enter ur Salary" onChange={handleSal}/>
        <input type="text" placeholder="Enter ur Department" onChange={handleDept}/>
        
        <h1>Name {Name}</h1>
        <h2> Age {age}</h2>
        <h2>Salary {sal}</h2>
        <h2>department {dept}</h2>
   
    </div>)
}

export default Userinfo;