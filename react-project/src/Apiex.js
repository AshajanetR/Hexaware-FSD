import { useEffect, useState } from "react";
import UserCard from "./UserCard";


const Apiex = () => {
    let [post,setpost] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((temp)=>setpost(temp))
        .catch((err)=>console.log(err))
    },[])
   
    
    
  return (
    <div>
    {console.log(post)}
         {post.map((user)=> <UserCard key= {user.id} userId= {user.userId} title = {user.title} body = {user.body}/>)}


    </div>
  )
}

export default Apiex;