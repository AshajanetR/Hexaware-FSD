import { useLocation } from "react-router-dom";
import "./App.css"
const ShowPayslip = () => {
    const data = useLocation();
    let {Id,name,bonus,bsal} = data.state;
    console.log(data.state)
  return (
    <div className="card-cont">
        <h1>EmpId: {Id}</h1>
        <h1>Name: {name}</h1>
        <h1>Basic sal : {bsal}</h1>
        <h1>Bonus: {bonus}</h1>
        <h1>Total sal: {bsal+bonus}</h1>
    </div>
  )
}

export default ShowPayslip;