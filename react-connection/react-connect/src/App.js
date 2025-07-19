import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {

     let [actno,setactno] = useState();
     let[name,setname] = useState();
     let[balance,setbalance] = useState();
     let[type,settype] = useState();
     let [msg,setmsg] = useState("");
     let[amt,setamt]=useState();
     let [customer,setCustomer]= useState();
     let [ users,setUsers] =useState([]);
     let [c,setc]=useState(0);

     const savedata = async()=>{
       const data ={actno,name,balance,type};
       const res =await axios.post("http://localhost:8085/saveData",data);
       console.log(res)
       setmsg(res.data);
       setc(c+1);
     }

     const removedata = async()=>{
      const res = await axios.delete(`http://localhost:8085/getDelete/${actno}`);
      setmsg(res.data)
      setc(c+1)
     }
     const deposit =async()=>{
      const res = await axios.put(`http://localhost:8085/deposite/${actno}/${amt}`);
      setmsg(res.data)
      setc(c+1)
     }
     const withdraw = async()=>{
      const res = await axios.put(`http://localhost:8085/withdrawal/${actno}/${amt}`);
      setmsg(res.data)
     setc(c+1)
     }
     const searchbyactno = async()=>{
      const res = await axios.get(`http://localhost:8085/getData/${actno}`);
      console.log(res.data);
      setCustomer(res.data);
      setc(c+1)
     }

     useEffect(()=>{
        getAll();
     },[c])

     const getAll=async()=>{
       const res = await axios.get(`http://localhost:8085/getUsers`);
      console.log(res.data);
      setUsers(res.data);
     }

  return (
    <div className="App">
    <div className='container'>
     <input type="text" placeholder ="enter account number" onChange={(e)=>setactno(e.target.value)}/>
     <input type="text" placeholder ="enter name" onChange={(e)=>setname(e.target.value)}/>
     <input type="text" placeholder='enter balance' onChange={(e)=>setbalance(e.target.value)}/>
     <input type="text" placeholder ="enter type" onChange={(e)=>settype(e.target.value)}/>
     <input type="text" placeholder ="enter amount" onChange={(e)=>setamt(e.target.value)}/>
     
      <button onClick={savedata} className='buttons'> Save Data </button>
       <button onClick={removedata} className='buttons'> Remove Data </button>
       <button onClick={deposit} className='buttons'>Deposit</button>
       <button onClick={withdraw} className='buttons'>Withdrawal</button>
       <button onClick={searchbyactno} className='buttons'>Search Custome</button>
      <p>{msg}</p>

    </div>  
      {
        customer ? <div className='card'>
        <p>Act no:{customer.actno}</p>
        <p>Name: {customer.name}</p>
        <p>Balance: {customer.balance}</p>
        <p>Type: {customer.type}</p>
      </div> :null
      }

      {
        users.length > 0 ? 
        users.map((user)=><div key={user.actno} className='card'>
        <p>Act no:{user.actno}</p>
        <p>Name: {user.name}</p>
        <p>Balance: {user.balance}</p>
        <p>Type: {user.type}</p>
        </div>)
        : null
      }
      
    </div>
  );
}

export default App;
