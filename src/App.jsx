import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Wishlist from './pages/Wishlist.jsx'
import Cart from './pages/Cart.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Product from './pages/Product.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route path='/Wishlist' element={<Wishlist />}/>
        <Route path='/Cart' element={<Cart />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Error' element={<ErrorPage />} />
        <Route path='/Product' element={<Product />} >
          <Route path=':productId' element={<Product />}/>
        </ Route>
      </Routes>
    </Router>
  )
}

export default App