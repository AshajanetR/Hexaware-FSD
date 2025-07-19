import { useEffect, useState } from "react";
import BCard from "./Components/BCard";
import { Message } from 'semantic-ui-react'
import LoaderU from "./Components/LoaderU";
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from 'semantic-ui-react'
const App = () => {
  const temp = [

  { bname: "JavaScript Basics", price: 299, qty: 10, city: "Delhi" },

  { bname: "Learning Python", price: 499, qty: 5, city: "Mumbai" },

  { bname: "Mastering Java", price: 399, qty: 8, city: "Chennai" },

  { bname: "Web Dev Guide", price: 199, qty: 15, city: "Kolkata" },

  { bname: "React Essentials", price: 349, qty: 12, city: "Bangalore" },

  { bname: "Node.js Handbook", price: 429, qty: 7, city: "Pune" },

  { bname: "HTML & CSS", price: 150, qty: 20, city: "Hyderabad" },

  { bname: "C++ for Beginners", price: 250, qty: 10, city: "Ahmedabad" },

  { bname: "Data Structures", price: 300, qty: 9, city: "Jaipur" },

  { bname: "Machine Learning", price: 550, qty: 4, city: "Chandigarh" },

  { bname: "AI Fundamentals", price: 600, qty: 3, city: "Bhopal" },

  { bname: "Django for All", price: 375, qty: 6, city: "Nagpur" },

  { bname: "Spring Boot Intro", price: 420, qty: 7, city: "Lucknow" },

  { bname: "Flutter Dev", price: 310, qty: 8, city: "Patna" },

  { bname: "SQL Mastery", price: 280, qty: 11, city: "Surat" },

  { bname: "MongoDB Guide", price: 270, qty: 13, city: "Indore" },

  { bname: "AWS for Developers", price: 650, qty: 2, city: "Noida" },

  { bname: "Cyber Security", price: 480, qty: 5, city: "Kanpur" },

  { bname: "Kotlin in Action", price: 360, qty: 6, city: "Thane" },

  { bname: "TypeScript Deep Dive", price: 330, qty: 9, city: "Amritsar" }

];

let [flag,setFlag]=useState(0)
let [marks,setMarks]=useState(0)
let [books,setbooks] = useState([]); 
let [name,setName]=useState();
let [qty,setQty]=useState();
let [price,setPrice]=useState();
let [city,setCity]=useState();
let [msg,setmsg]=useState(0);
const [open, setOpen] = useState(false)

const showResult = ()=>{
  if(marks === "0"){
    setFlag(0);
  }else if(marks<50){
    setFlag(1);
  }else{
    setFlag(2);
  }
}

useEffect(()=>{
  setTimeout(()=>setbooks(temp),2000)
},[])
 
const handleadd = ()=>{
  const newcard ={
    bname:name,
    qty,
    price,
    city
  }

  setbooks([...books,newcard])
  setOpen(false)
  setmsg(1);
  setTimeout(() => {
    setmsg(0);
  }, 2000);
}

const handleUpdate =()=>{
  let f= false;
  let data =books.map((b)=>{
    if(b.bname === name){
      f=true;
      if(qty!=null) b.qty =qty
      if(price!=null) b.price=price
      if(city!=null) b.city=city
      return b;
    }
    return b;
  })
  if (f == false) {
    alert("No such book found");
  }
  setbooks(data)
}


  return (
    <div>
     <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
        <input type="text" placeholder="enter book name " onChange={(e)=>setName(e.target.value)}/><br/>
        <input type="text" placeholder="enter book qty " onChange={(e)=>setQty(e.target.value)}/><br/>
        <input type="text" placeholder="enter book price " onChange={(e)=>setPrice(e.target.value)}/><br/>
        <input type="text" placeholder="enter book city " onChange={(e)=>setCity(e.target.value)}/><br/>
        <button onClick={handleadd}> Add Item </button>
        <button onClick={()=>setOpen(false)}> cancel </button>
        <button onClick={handleUpdate}>update</button>
    </Modal>

        
         {
          msg == 1 ? <Message color='olive'>Added successfully</Message> :null
         }
        <hr />
          <input type="text" placeholder="Enter your total marks" onChange={(e)=>setMarks(e.target.value)}/>
          
          <button onClick={showResult}> show Result </button>

          {
            flag ===1 ? <Message color='black'>Fail</Message> : flag ===2 ? <Message color='brown'>Pass</Message> :"Marks cant be Zero"
          }
          {
          books.length ? books.map((temp)=><BCard bname={temp.bname} price={temp.price} qty={temp.qty} city={temp.city}/>) : 
          <LoaderU />
        }
    </div>
  )
}

export default App;

 