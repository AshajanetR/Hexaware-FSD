import React from 'react'
import Register from '../Components/Register';
import Login from '../Components/Login';
import AddBook from '../Components/AddBook';
import {Routes,Route} from 'react-router-dom';
import Home from '../Components/Home';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/addBook" element={<AddBook />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes;