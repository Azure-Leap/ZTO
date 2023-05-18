import { CartContext } from "@/context/CartContext";
import { AuthContext } from "@/context/UserContext";
import {Box, Button, Container, Grid, IconButton, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const CartWeb = () => {
  const {  cartItems }:any = useContext(CartContext);
  const [count, setCount] = useState(1)
  // const { user } = useContext(AuthContext);
  
  // const getCarts = async () => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:9010/carts/user/${user._id}`
  //     );
  //     // console.log(";;", res.data);
  //     setCartItems(res.data);
  //     setChangeState(!changeState)
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };

  // const deleteCart = async(id:any)=>{
  //   console.log("del", id);
  //   try{
  //     await axios.delete(
  //       `http://localhost:9010/carts/${id}`
  //     )
  //     setChangeState(!changeState)

  //   }catch(err){
  //     console.log("err", err);
  //   }

  // }
  
  const deleteCart= ()=>{
  }

  // useEffect(() => {
  //   getCarts();
  // }, [changeState]);

  // const sumCount = ()=>{
  //   const {price} = cartItems.website;

    
  // }

  return (
    <>
    <Container>
        <Grid container
              spacing={2} marginY={"15px"}  >
          <Grid item xs={12} sm={12} md={7} lg={8}>           
            {cartItems?.map((item :any, idx:any)=>
            <Grid key={idx}
              container
              spacing={2}
              sx={{
                mt:"20px",
                backgroundColor: "#f2f2f2",
                borderRadius: "20px",
                color: "#040e3f",
                height:"550px",
                boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",

              }}
              justifyContent={"center"}
            >
              <Grid item xs={7} sx={{ mx: "auto"}}>
                <Box
                  sx={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <Box sx={{ width: 30, display:"flex", my:"5px" }}>
                    <CancelIcon sx={{color:"#f44336",height:15}}/>
                    <DoNotDisturbOnIcon sx={{color:"#ffc400", height:15,}}/>
                    <NotStartedIcon sx={{color:"green", height:15}}/>
                  </Box>
                  <Box sx={{height:"500px", border:"1px solid #ffc400"}} >
                    <Box
                    className="bounceTemplate"
                    sx={{
                      backgroundImage: `url(${item?.image})`,
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "100%",
                      backgroundPosition: "center 0",
                      backgroundSize:"cover",
                      scrollBehavior:"smooth",
                      overflowY:"auto",
                      backgroundAttachment:"scroll",
                    }}/>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={4} mr={2} mt={10}>
                <Typography variant="h3" sx={{fontWeight:600, }}>{item?.name}</Typography>
                <Typography variant="h6" sx={{fontSize: "0.9rem"}}>Website type: {item?.webType}</Typography>
                <Typography variant="h5" sx={{my:"10px"}}><span style={{fontSize:"1.3rem", fontWeight:"600"}}>Price:</span> {item?.price}$</Typography>
                <Typography variant="body1"> <span style={{fontSize:"1.3rem", fontWeight:"600"}}> Description:</span>  {item?.detail}</Typography>
                <Box>
                  <Typography variant="h5" mt={"10px"} >Quantity</Typography>
                  <Box>

                  </Box>
                </Box>
                <Box sx={{mt:"50px", float:"right"}}>
                  <IconButton aria-label="delete" sx={{fontSize:"1.5rem"}} onClick={deleteCart} >
                    <DeleteIcon sx={{color:"red"}} /> <Typography>Remove</Typography>
                  </IconButton>
                  {/* <IconButton aria-label="delete" sx={{fontSize:"1.5rem"}} onClick={()=>deleteCart(item._id)} >
                    <AttachMoneyIcon sx={{color:"green"}} /> <Typography>Buy</Typography>
                  </IconButton> */}
                </Box>

              </Grid>
            </Grid>
            )}
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3.3} sx={{ m:"25px"  }}>        
              <Box sx={{ textAlign:"center",  px:"10px" ,  backgroundColor:"#FFF",  border:"1px solid #ffc400", height:"300px",  borderRadius:"20px",
                               boxShadow:
                               "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  
            }}>
                <Typography variant="h6"  >Order total</Typography>
                <hr/>
                <Typography variant="h3">200$</Typography>
                <Button variant="contained"  sx={{mt:"20px", backgroundColor:"orange", width:"100%", fontWeight:600}}>Checkout now</Button>
                <Typography variant="body1" my={"10px"}> *By proceeding with your purchase you agree with these Terms of Use.</Typography>
              </Box>

              {/* <Box 
              sx={{ textAlign:"center", mt:"30px", px:"10px" ,  backgroundColor:"#FFF",  border:"1px solid #ffc400", height:"500px",  borderRadius:"20px",
              boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
              >
                <Typography variant="h6"  >Захиалга хийх зөвлөмж</Typography>
                <hr/>
                <Typography variant="h3">200$</Typography>
                <Button variant="contained"  sx={{mt:"20px", backgroundColor:"orange", width:"100%", fontWeight:600}}>Checkout now</Button>
                <Typography variant="body1" my={"10px"}> *By proceeding with your purchase you agree with these Terms of Use.</Typography>
              </Box>
             */}

          </Grid>

        </Grid>
        </Container>
    </>
  );
};

export default CartWeb;
