import { useState } from 'react';
import './App.css';
import Morning from './Components/Morning';
import Night from './Components/Night';

function App() {

  let [time,setTime]=useState(0);
 
    const handleTime=(e)=>{
       setTime(e.target.value)
    }
  return (
    <div className="App">
      {/* <Login /> */}
      <input type="text" placeholder="enter time" onChange={handleTime}/>
 
      {
      time <=0 ? "null" : time<=12 ?  <Morning/> :  <Night/>
      }
      
    </div>
  );
}

export default App;
