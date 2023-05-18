import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({}) as any;

const CartProvider = ({children}:any):JSX.Element => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [changeState, setChangeState] = useState(false)
   
  const addCart = (item:any)=>{
    const findItem = cartItems?.find(e=>e._id !== item._id) ;
    
    let newItems:any[] = cartItems?.length > 0 ? [...cartItems]: []
     newItems.push(item)
    setCartItems(newItems)
    localStorage.setItem('cart', JSON.stringify(newItems))
  }

  
  



  useEffect(()=>{
    const prev = localStorage.getItem('cart') as string
    setCartItems(JSON.parse(prev))
  },[])
  
  return (
    <CartContext.Provider value={{cartItems, setCartItems, changeState, setChangeState, addCart }}>{children}</CartContext.Provider>
  )
}

export default CartProvider