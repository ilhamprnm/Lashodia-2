import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext([]);

export const ShopContextProvider = (props) => {

  const [products,setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
          .then((response) => response.json())
          .then((data) =>{
            
            setProducts(data)
          })
    
  },[])

  const addToCart = (itemId) => {
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/addtocart', {
        method:"POST",
        headers: {
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"itemId":itemId})
      })
    }
  }

  return (
    <ShopContext.Provider value={{products, addToCart}}>
      {props.children}
    </ShopContext.Provider>
  )
}

