import React from 'react'
import "./App.css"
const Ucard = ({UserId,Name,Salary}) => {
  return (
    <div className='cont'>
       <h1> {UserId}</h1>
       <h2> {Name}</h2>
        <h2>
            {Salary}
        </h2>
    </div>
  )
}

export default Ucard;