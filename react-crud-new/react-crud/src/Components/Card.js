import { useState } from "react";
import "../App.css"

const Card = ({id,title,image,category,removeData,updateCategory}) => {
    let [newCategory,setnewcategory] = useState("");

  return (
    <div className="card-cont">
     <h1> {id}</h1>
     <h2>{title}</h2>
     <img src={image}/>
     <input type="text" placeholder="enter catgory" onChange={(e)=>setnewcategory(e.target.value)}/>
     <h2> {category}</h2>
     <button onClick={()=>removeData(id)}>Remove</button>
     <button onClick={()=>updateCategory(id,newCategory)}>Update category</button>
    </div>
  )
}

export default Card;