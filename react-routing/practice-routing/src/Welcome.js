
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
    // const data = useLocation();
    // let {Id,password} = data.state;
    // console.log(data)
    // using state as object v have passed values while navigating
   
    // below is using localstorage v hve passed and accesssed values
    
    let [Id,setId] = useState("");
    let [password,setPassword] = useState("");
    useEffect(()=>{
         let data= localStorage.getItem("data")
         const {Id,password} = (JSON.parse(data));
         setId(Id)
         setPassword(password)
    },[])

  return (
    <div>Welcome {Id} {password}</div>
  
  )
}

export default Welcome;