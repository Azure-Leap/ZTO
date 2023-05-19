import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({}) as any;

const CartProvider = ({children}:any):JSX.Element => {
    const [cartItems, setCartItems] = useState<any[]>([]);
   
  // const addCart = (item:any)=>{
  //   const findItem = cartItems?.find(e=>e._id !== item._id) ;
    
  //   let newItems:any[] = cartItems?.length > 0 ? [...cartItems]: []
  //    newItems.push(item)
  //   setCartItems(newItems)
  //   localStorage.setItem('cart', JSON.stringify(newItems))
  // }

  const addCart = (template:any, type:string) => {
    // localStorage.removeItem('cart')
    const localCard = localStorage.getItem("cart") as string;
    const prev = JSON.parse(localCard);
    let items: any[] = [];
    if (prev) {
      items = [...prev];
    }

    const prevProductIdx = items?.findIndex((item) => item?.template?._id === template?._id);

    console.log("o", prevProductIdx);
    console.log(type);
    if (prevProductIdx > -1) {
      const cnt = type === "inc" ? items[prevProductIdx].quantity + 1 : items[prevProductIdx].quantity - 1;
      if (cnt < 0) return;
      items[prevProductIdx].quantity = cnt;
      items[prevProductIdx].totalPrice = cnt * items[prevProductIdx].template.price;
    } else {
      items.push({ template, quantity: 1, totalPrice:template.price });
    }
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };
  
 



  useEffect(()=>{
    const prev = localStorage.getItem('cart') as string
    setCartItems(JSON.parse(prev))
  },[])
  
  return (
    <CartContext.Provider value={{cartItems, setCartItems, addCart  }}>{children}</CartContext.Provider>
  )
}

export default CartProvider