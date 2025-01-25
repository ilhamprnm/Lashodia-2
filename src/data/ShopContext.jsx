import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext([]);

export const ShopContextProvider = (props) => {

 
  return (
    <ShopContext.Provider value={{}}>
      {props.children}
    </ShopContext.Provider>
  )
}

