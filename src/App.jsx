import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Wishlist from './pages/Wishlist.jsx'
import Cart from './pages/Cart.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Wishlist' element={<Wishlist />}/>
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App