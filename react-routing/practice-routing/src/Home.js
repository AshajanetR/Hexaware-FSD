import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Ucard from './Ucard';
const Home = () => {
  const [users,setusers] = useState([
      {UserId:101,Name:"Asha",Salary:20000},
      {UserId:102,Name:"Ajay",Salary:25000},
      {UserId:103,Name:"Dev",Salary:50000},
      {UserId:104,Name:"Jey",Salary:60000}
    ])
  return (
    <div>
       {
          users.map((temp)=>
   
       <Link to ={`/ucard/${temp.UserId}/${temp.Name}/${temp.Salary}`}><Ucard UserId={temp.UserId} Name={temp.Name} Salary={temp.Salary}/></Link>
 
   
    )
        }
    </div>
  )
}

export default Home;