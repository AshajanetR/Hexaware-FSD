import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>🏠 Welcome to the Library</h2>
      <h3>📋 Menu</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/signIn"><button>Sign In</button></Link></li>
        <li><Link to="/signUp"><button>Sign Up</button></Link></li>
        <li><Link to="/Dashboard"><button>Dashboard</button></Link></li>
        <li><Link to="/addBook"><button>Add Book</button></Link></li>
        <li><Link to="/removeBook"><button>Remove Book</button></Link></li>
        <li><Link to="/issueBook"><button>Issue Book</button></Link></li>
        <li><Link to="/returnBook"><button>Return Book</button></Link></li>
      </ul>
    </div>
  );
};

export default Home;