import React from 'react'
import { useParams } from 'react-router-dom';
import "./App.css"
const ShowProd = () => {
    const {itemCode,name,price,quantity,city}=useParams();
  return (
    <div className='cont'>
        <p>Code: {itemCode}</p>
         <p>Name: {name}</p>
         <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
           <p>City: {city}</p>
    </div>
  )
}

export default ShowProd;