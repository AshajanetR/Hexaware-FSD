import React from 'react'
import "./App.css"
const ECard = ({itemCode,name,price,quantity,city}) => {
  return (
    <div className="cont">
         <p>{name}</p>
         <p>Click to see product info</p>
    </div>
  )
}

export default ECard;