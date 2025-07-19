import { useState } from "react";

const Counter = () => {
    const [c,setC] = useState(0);
    const add = ()=>{
        setC(c+1);
    }
    const sub = ()=>{
        setC(c-1);
    }
  return (
    <div className="cont">
          <h1>{c}</h1>
          <button onClick = {add}>Add</button>
          <button onClick = {sub}>Sub</button>
    </div>
  )
}

export default Counter;