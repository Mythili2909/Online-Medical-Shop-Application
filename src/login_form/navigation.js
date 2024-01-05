import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './Register';
import Home from './home';
import Login from './login';
function Navigation(props) {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/register'>Register</Link>
            </li>
            <li>
              <Link to='/home'>Food Portal</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={< Register />} />
          <Route
            path='/home'
            element={<div>Welcome To Food Portal!!!! <br/><br/><br/>Eat Delicious Food </div>}
          />
          <Route path='/access-denied' element={<div>Invalid Username and Password! </div>} />
        </Routes>
      </Router>
    );
  }
export default Navigation;  