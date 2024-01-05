// import logo from './logo.svg';
import './App.css';
import Register from './login_form/Register';
import Login from './login_form/login';
import { Routes,Route } from 'react-router-dom';
import Product from './login_form/product'
import Navbar from './login_form/nav';
import Home from './login_form/home';
import About from './login_form/about';
import AddToCartPage from './login_form/Addtocart';
// import YourComponent from './login_form/Dashboard';
import './Assets/Style/nav.css';
import './Assets/Style/home.css';
import './Assets/Style/register.css';
import './Assets/Style/login.css';
import './Assets/Style/about.css';
import './Assets/Style/product.css';
import './Assets/Style/Addtocart.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/Addtocart' element={<AddToCartPage />}/>
          {/* <Route path='/Dashboard' element={<YourComponent />}/> */}
      </Routes>
      </>
  );
}

export default App;
