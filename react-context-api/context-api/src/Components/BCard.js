import { useContext } from "react";
import { MyContext } from "../MyContext";


const BCard = () => {
    const {age,name}= useContext(MyContext);
  return (
    <div>
        <h1>Age : {age}</h1>
        <h1>Name : {name}</h1>
    </div>
  )
}

export default BCard;