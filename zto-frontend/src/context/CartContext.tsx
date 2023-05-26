import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./UserContext";
import { useRouter } from "next/router";
import { BASE_API_URL } from "@/utils/variables";
import { get } from "jquery";

export const CartContext = createContext({}) as any;

const CartProvider = ({ children }: any): JSX.Element => {
  const [cartItem, setCartItem] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [changeState, setChangeState] = useState(false);
  const [alert, setAlert] = useState(false);
  const { user }: any = useContext(AuthContext);
  const [orderId, setOrderId] = useState("");

 const addCart = async(tem:any) =>{
  try{
    if(!cartItem){
      const res = await axios.post(`${BASE_API_URL}/carts`, {user_id:user._id, items:[tem], totalPrice:tem.price})
      console.log("orood irlee")
    }else{
      console.log("up")
 
      const {items, _id}:any = cartItem
      const orderTotal = items?.reduce(
          (ac: any, cur: any) => (ac += cur.price),
        );
        const arr = [...items, tem]
            const res = await axios.put(`${BASE_API_URL}/carts/${_id}`, {items:arr, totalPrice:orderTotal})
    }
    setChangeState(!changeState)
   
  }catch(err){
    console.log("ERR", err)
  }
 }
 const getCart =async()=>{
  try{
    const res = await axios.get(`${BASE_API_URL}carts/user/${user._id}`)
    console.log("oo", res)
    setCartItem(res.data)
  }catch(err){
    console.log("err", err)
  }
 };

 useEffect(()=>{
  getCart()
 },[changeState])
 

  // const addCart = async (template: any, type: string) => {
  //   const localCard = localStorage.getItem("cart") as string;
  //   const prev = JSON.parse(localCard);
  //   let items: any[] = [];
  //   if (prev) {
  //     items = [...prev];
  //   }
  //   const prevProductIdx = items?.findIndex(
  //     (item) => item?.template?._id === template?._id
  //   );
  //   // console.log("o", prevProductIdx);
  //   // console.log(type);
  //   if (prevProductIdx > -1) {
  //     const cnt =
  //       type === "inc"
  //         ? items[prevProductIdx].quantity + 1
  //         : items[prevProductIdx].quantity - 1;
  //     if (cnt < 0) return;
  //     items[prevProductIdx].quantity = cnt;
  //     items[prevProductIdx].totalPrice =
  //       cnt * items[prevProductIdx].template.price;
  //   } else {
  //     items.push({ template, totalPrice: template.price });
  //   }
  //   localStorage.setItem("cart", JSON.stringify(items));
  //   setCartItems(items);
  // };

  // const createCart = async () => {
  //   console.log("object,", user);
  //   if (!user) {
  //     // setAlert(true)
  //     return;
  //     //  router.replace("/auth")
  //   }
  //   console.log("Bainaa");
  //   // console.log("rr", user)

  //   try {
  //     const getCart = localStorage.getItem("cart") as string;
  //     if (getCart) {
  //       const value = JSON.parse(getCart);
  //       const sumPrice = value?.reduce(
  //         (ac: any, cur: any) => (ac += cur.totalPrice),
  //         0
  //       );
  //       const res = await axios.post(`${BASE_API_URL}/carts`, {
  //         user_id: user._id,
  //         cartItem: value,
  //         totalPrice: sumPrice,
  //       });
  //       console.log("ca", res.data);
  //       setChangeState(!changeState);
  //       localStorage.removeItem("cart");
  //     }
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };

  // const getCarts = async () => {
  //   console.log("object,", user);
  //   if (user) {
  //     try {
  //       const res = await axios.get(`${BASE_API_URL}/carts/user/${user._id}`);
  //       console.log(";;", res.data);
  //       setCartItems(res.data);

  //       // localStorage.setItem("cart", JSON.stringify(res.data))
  //     } catch (err) {
  //       console.log("err", err);
  //     }
  //   } else {
  //     const prev = localStorage.getItem("cart") as string;
  //     if (prev) {
  //       setCartItems(JSON.parse(prev));
  //     }
  //   }
  // };

  // useEffect(() => {
  //   console.log("UECI");
  //   createCart();
  //   getCarts();
  // }, [user]);

  const getOrders = async () => {
    if (user?._id) {
      try {
        const res = await axios.get(`${BASE_API_URL}/orders/user/${user._id}`);
        setOrders(res.data);
      } catch (err) {
        console.log("ERR", err);
      }
    }
  };

  useEffect(() => {
    getOrders();
  }, [changeState]);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        changeState,
        setChangeState,
        alert,
        setAlert,
        addCart,
        orders,
        orderId,
        setOrderId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
