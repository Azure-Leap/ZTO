import { CartContext } from "@/context/CartContext";
import { AuthContext } from "@/context/UserContext";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import DeleteIcon from "@mui/icons-material/Delete";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Layout from "@/components/layout";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Link from "next/link";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const CartWeb = () => {
  const { cartItems, setCartItems, changeState, setChangeState , alert, setAlert }: any = useContext(CartContext);
  const { user }:any = useContext(AuthContext);
  
  const deleteCart = async(id:any)=>{
    console.log("del", id);
    try{
      await axios.delete(
        `http://localhost:9010/carts/${id}`
      )
      setChangeState(!changeState)

    }catch(err){
      console.log("err", err);
    }
  }

  const createOrder = async()=>{
    console.log(cartItems, "p")
    if(user && cartItems.cartItem){
      try{
        const res = await  axios.post("http://localhost:9010/orders", {user_id:user._id, cart_id:cartItems._id, totalAmount:cartItems.totalPrice} )
        console.log("orders", res.data) 
        setChangeState(!changeState)
      }catch(err){
        console.log("ERR", err)
      }
    }else{
      setAlert(true)
    }
  }

  // const removeCart = (id: any) => {
  //   console.log(id);
  //   const filteredItems = cartItems?.filter((e: any) => e.template._id !== id);
  //   console.log(filteredItems);
  //   localStorage.setItem("cart", JSON.stringify(filteredItems));
  //   setCartItems(filteredItems);
  // };



  const orderTotal = cartItems?.cartItem?.reduce(
    (ac: any, cur: any) => (ac += cur.totalPrice),
    0
  );
 

  return (
    <Layout>
      <Container>
      <Snackbar
        open={alert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={()=>{
          setAlert(true)
         }}
      >
          <Alert severity="success">Захиалга цуцлагдлаа</Alert>

      </Snackbar>
        <Grid container spacing={2} marginY={"15px"}>
          {cartItems.cartItem ?
          <Grid item xs={12} sm={12} md={7} lg={8}>    
            ({cartItems.cartItem.map((item: any, idx: any) => (
              <Grid
                key={idx}
                container
                spacing={2}
                sx={{
                  mt: "20px",
                  backgroundColor: "#f2f2f2",
                  borderRadius: "20px",
                  color: "#040e3f",
                  height: "550px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
                justifyContent={"center"}
              >
                <Grid item xs={7} sx={{ mx: "auto" }}>
                  <Box
                    sx={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    }}
                  >
                    <Box sx={{ width: 30, display: "flex", my: "5px" }}>
                      <CancelIcon sx={{ color: "#f44336", height: 15 }} />
                      <DoNotDisturbOnIcon
                        sx={{ color: "#ffc400", height: 15 }}
                      />
                      <NotStartedIcon sx={{ color: "green", height: 15 }} />
                    </Box>
                    <Box sx={{ height: "500px", border: "1px solid #ffc400" }}>
                      <Box
                        className="bounceTemplate"
                        sx={{
                          backgroundImage: `url(${item?.template.image})`,
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          height: "100%",
                          backgroundPosition: "center 0",
                          backgroundSize: "cover",
                          scrollBehavior: "smooth",
                          overflowY: "auto",
                          backgroundAttachment: "scroll",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4} mr={2} mt={10}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {/* {item?.website.name} */}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "0.9rem" }}>
                    {/* Website type: {item?.template.webType} */}
                  </Typography>
                  <Typography variant="h5" sx={{ my: "10px" }}>
                    <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                      Price:
                    </span>{" "}
                    {item?.template.price}$
                  </Typography>
                  <Typography variant="body1">
                    {" "}
                    <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                      {" "}
                      Description:
                    </span>{" "}
                    {item?.template.detail}
                  </Typography>
                  <Box>
                    <Typography variant="h5" mt={"10px"}>
                      quantity: {item?.quantity}
                    </Typography>

                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 400, mt: "10px" }}>
                    {/* Total price: {item?.totalPrice} $ */}
                  </Typography>
                  <Box sx={{ mt: "50px", float: "right" }}>
                    <IconButton
                      aria-label="delete"
                      sx={{ fontSize: "1.5rem" }}
                      // onClick={()=>  deleteCart()}
                      // onClick={() => remove(item.template._id)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />{" "}
                      <Typography>Remove</Typography>
                    </IconButton>
                    <IconButton href="/website-templates/payment"
                      aria-label="delete"
                      sx={{ fontSize: "1.5rem" }}
                      // onClick={() => createPayment(item._id, order._id)}
                    >
                      <MonetizationOnIcon sx={{ color: "green" }} />{" "}
                      <Typography>Buy</Typography>
                    </IconButton>

                  </Box>
                </Grid>
              </Grid>
            ))} )          
          </Grid> 
          : 
          <Grid item xs={12} sm={12} md={7} lg={8}>    
            ({cartItems.map((item: any, idx: any) => (
              <Grid
                key={idx}
                container
                spacing={2}
                sx={{
                  mt: "20px",
                  backgroundColor: "#f2f2f2",
                  borderRadius: "20px",
                  color: "#040e3f",
                  height: "550px",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
                justifyContent={"center"}
              >
                <Grid item xs={7} sx={{ mx: "auto" }}>
                  <Box
                    sx={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    }}
                  >
                    <Box sx={{ width: 30, display: "flex", my: "5px" }}>
                      <CancelIcon sx={{ color: "#f44336", height: 15 }} />
                      <DoNotDisturbOnIcon
                        sx={{ color: "#ffc400", height: 15 }}
                      />
                      <NotStartedIcon sx={{ color: "green", height: 15 }} />
                    </Box>
                    <Box sx={{ height: "500px", border: "1px solid #ffc400" }}>
                      <Box
                        className="bounceTemplate"
                        sx={{
                          backgroundImage: `url(${item?.template.image})`,
                          backgroundRepeat: "no-repeat",
                          width: "100%",
                          height: "100%",
                          backgroundPosition: "center 0",
                          backgroundSize: "cover",
                          scrollBehavior: "smooth",
                          overflowY: "auto",
                          backgroundAttachment: "scroll",
                        }}
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={4} mr={2} mt={10}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {/* {item?.website.name} */}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "0.9rem" }}>
                    {/* Website type: {item?.template.webType} */}
                  </Typography>
                  <Typography variant="h5" sx={{ my: "10px" }}>
                    <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                      Price:
                    </span>{" "}
                    {item?.template.price}$
                  </Typography>
                  <Typography variant="body1">
                    {" "}
                    <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                      {" "}
                      Description:
                    </span>{" "}
                    {item?.template.detail}
                  </Typography>
                  <Box>
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 400, mt: "10px" }}>
                    {/* Total price: {item?.totalPrice} $ */}
                  </Typography>
                  <Box sx={{ mt: "50px", float: "right" }}>
                    <IconButton
                      aria-label="delete"
                      sx={{ fontSize: "1.5rem" }}
                      // onClick={()=>  deleteCart()}
                      // onClick={() => remove(item.template._id)}
                    >
                      <DeleteIcon sx={{ color: "red" }} />{" "}
                      <Typography>Remove</Typography>
                    </IconButton>
                    <IconButton href="/website-templates/payment"
                      aria-label="delete"
                      sx={{ fontSize: "1.5rem" }}
                      // onClick={() => createPayment(item._id, order._id)}
                    >
                      <MonetizationOnIcon sx={{ color: "green" }} />{" "}
                      <Typography>Buy</Typography>
                    </IconButton>

                  </Box>
                </Grid>
              </Grid>
            ))} )          
          </Grid>
          }        
          <Grid item xs={12} sm={12} md={4} lg={3.3} sx={{ m: "25px" }}>
            <Box
              sx={{
                textAlign: "center",
                px: "10px",
                backgroundColor: "#FFF",
                border: "1px solid #ffc400",
                height: "300px",
                borderRadius: "20px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <Typography variant="h6">Order total</Typography>
              <hr />
              <Typography variant="h3">{orderTotal}$</Typography>
              <Button 
              href="/website-templates/payment"
                variant="contained"
                sx={{
                  mt: "20px",
                  backgroundColor: "orange",
                  width: "100%",
                  fontWeight: 600,
                }}
                onClick={createOrder}

              >
                Checkout now
              </Button>
              <Typography variant="body1" my={"10px"}>
                {" "}
                *By proceeding with your purchase you agree with these Terms of
                Use.
              </Typography>
            </Box>
          </Grid>
        </Grid>        
      </Container>
    </Layout>
  );
};

export default CartWeb;


