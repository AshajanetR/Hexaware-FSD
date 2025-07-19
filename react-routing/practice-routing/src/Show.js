import React from 'react'
import { useParams } from 'react-router-dom';
import "./App.css"
const Show = () => {
    let {UserId,Name,Salary}=useParams()
  return (
    <div className='cont'>
        <p>{UserId}</p>
        <p>{Name}</p>
    </div>
  )
}

export default Show;