import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext([]);

export const ShopContextProvider = (props) => {

  const [products,setProducts] = useState([]);
  const [cartData,setCartData] = useState([]);

  const updateData = () => {
    fetch("https://lashodia-2-backend.vercel.app/allproducts")
      .then((response) => response.json())
      .then((data) =>{
        
        setProducts(data)

      })
    
    if(localStorage.getItem('auth-token')){
      fetch('https://lashodia-2-backend.vercel.app/getcartdata', {
        method:"GET",
        headers: {
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
      })
      .then((response) => response.json())
      .then((data)=>{
        setCartData(data)
      })
    }
  }

  useEffect(() => {
    updateData();
  },[])


  const addToCart = (product,quantity) => {
    if(localStorage.getItem('auth-token')){
      fetch('https://lashodia-2-backend.vercel.app/addtocart', {
        method:"POST",
        headers: {
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({product,quantity})
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          
          alert('product added')
          setCartData(data.cartData)
        }
      })
    } else {
      alert('Please Login / Signup first')
    }
    updateData();
  }

  const removeFromCart = (product) => {
    if(localStorage.getItem('auth-token')){
      fetch('https://lashodia-2-backend.vercel.app/removefromcart', {
        method:"POST",
        headers: {
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product)
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          
          alert('product removed')
          setCartData(data.cartData)
        }
      })
    } else {
      alert('Please Login / Signup first')
    }
    updateData();
  }

  
  return (
    <ShopContext.Provider value={{products, addToCart, cartData, removeFromCart}}>
      {props.children}
    </ShopContext.Provider>
  )
}

