import { Link } from "react-router-dom";
import '../App.css'

const Home = () => {
  return (
    <div className="card">
        <Link to="/register"><button>Register</button></Link>
        <Link to="login"><button>Login</button></Link>
        <Link to="addBook"><button>Add Book</button></Link>
    </div>
  )
}

export default Home;