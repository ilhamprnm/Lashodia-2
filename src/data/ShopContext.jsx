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

  return (
    <ShopContext.Provider value={products}>
      {props.children}
    </ShopContext.Provider>
  )
}

