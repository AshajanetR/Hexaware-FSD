import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import RemoveBook from './components/RemoveBook';
import { Route, Routes } from 'react-router-dom';
import IssueBook from './components/IssueBook';
import ReturnBook from './components/ReturnBook';
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/addBook" element={<AddBook />} />
            <Route path="/removeBook" element={<RemoveBook />} />
            <Route path = "/issueBook" element={<IssueBook/>}/>
            <Route path = "/returnBook" element={<ReturnBook />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes;