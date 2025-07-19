import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const nav = useNavigate();
    let[isbn,setisbn] = useState("");
    let[title,settitle] = useState("");
    let [author,setauthor]= useState("");
    let [publicationYear,setpublicationYear] = useState(0);

    const handleaddbook = ()=>{
    const token = localStorage.getItem('token');
    if(token === null){
        alert('authentication token required')
        nav('/');
    }else{
        const data ={isbn,title,author,publicationYear}
        axios.post(`http://localhost:8085/api/book`,data,{
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type":'application/json'
            }
        })
        .then((res)=>{
            alert('added book successfully')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
    }
    
    return (
    <div className='card'>
       <input type="text" placeholder='isbn' required onChange={(e)=>setisbn(e.target.value)}/>
       <input type="text" placeholder='title' required onChange={(e)=>settitle(e.target.value)}/>
       <input type="text" placeholder='author' required onChange={(e)=>setauthor(e.target.value)}/>
       <input type="number" placeholder='publicationYear' required onChange={(e)=>setpublicationYear(parseInt(e.target.value))}/>
       <button onClick={handleaddbook}>Add Book</button>
    </div>
  )
}

export default AddBook;