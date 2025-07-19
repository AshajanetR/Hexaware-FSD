import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Reviews from './Reviews';
import Contact from './Contact';
import SignIn from './SignIn';
import Login from './Login';
import Welcome from './Welcome';
import PaySlip from './PaySlip';
import ShowPayslip from './ShowPayslip';
import Show from './Show';
import Electronics from './Electronics';
import ShowProd from './ShowProd';
import Protected from './Protected';

const App = () => {

  return (
    <div>
        
        <nav>
              <table border={2}>
                <tr>
                  <Link to ="/"><td>Home</td></Link> 
                  <Link to ="/contact"><td>Contact</td></Link> 
                  <Link to ="/reviews"><td>Reviews</td></Link> 
                  <Link to ="/signIn"><td>SignIn</td></Link> 
                  <Link to ="/login"><td>Login</td></Link>
                  <Link to ="/payslip"><td>Payslip</td></Link>
                  <Link to="/electronics"><td>See All Products</td></Link>
                </tr>
              </table>
          </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/reviews" element={<Protected component={Reviews} />} />

        <Route path="/signIn" element={<SignIn />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/payslip" element={<PaySlip />}/>
        <Route path="/showpayslip" element={<ShowPayslip />}/>
        <Route path="/ucard/:UserId/:Name/:Salary" element={<Show />} />
        <Route path="/electronics" element={<Electronics />}/>
        <Route path="/showprod/:itemCode/:name/:price/:quantity/:city" element={<ShowProd />}/>
      </Routes>


      
    </div>
  )
}

export default App;