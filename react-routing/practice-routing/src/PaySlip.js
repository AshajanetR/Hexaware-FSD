import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

const PaySlip = () => {
    const nav =useNavigate();

    let [Id,setId] =useState("");
    let [name,setname] =useState("");
    let [bsal,setbsal] = useState(0);
    let [bonus,setbonus] =useState(0);

    const calcsal = ()=>{
        let calbonus = 0;
        if(bsal <=5000){
            calbonus = bsal*0.05;
           setbonus(calbonus);
        }else{
            calbonus = bsal*0.10;
            setbonus(calbonus);
        }
        alert("calculated payslip")
    }

    const showpayslip = ()=>{
        nav("/showpayslip",{state:{
            Id,name,bonus,bsal
        }})
    }
  return (
    <div className="card-cont">
        <input type="text" required placeholder="Enter emp Id" onChange={(e)=>setId(e.target.value)}/>
         <input type="text" required placeholder="Enter emp name" onChange={(e)=>setname(e.target.value)}/>
        <input type="text" required placeholder="Enter emp basic salary" onChange={(e)=>setbsal(Number(e.target.value))}/>
        <button onClick={calcsal}>Calculate</button>
        <button onClick={showpayslip}>Show Payslip</button>
    </div>
  )
}

export default PaySlip;