import React, { useContext, useEffect, useState } from "react";
import { Grid, Box, Link, CircularProgress, IconButton } from "@mui/material";
import Typography from "../editPage/onepirate/modules/components/Typography";
import { Button } from "@mui/material";
import axios from "axios";
import Search from "./Search";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AuthContext } from "@/context/UserContext";
import { CartContext } from "@/context/CartContext";

const WebsiteTemlatesCard = ({ templates, isLoading,setTemplatesFilter, templatesFilter }:any) => {
  // console.log("templates", templates);
  // const {user} = useContext(AuthContext)
 const [webList, setWebList] = useState([...templates])
 const {addCart, setCartItems}:any =useContext(CartContext)

  const searchWeb = (e: any) => {
    console.log("fff", e.target.value);
    const filterWeb = templates.filter((web:any) => web.name?.toLowerCase().includes(e.target.value))
      setTemplatesFilter(filterWeb) ;
      // setTemplates(templatesFilter)
  }
  console.log('weblist',templates);

  // const addCart = async(id:any)=>{
  //   try{
  //     const res = await axios.post("http://localhost:9010/carts", {user:user._id, website:id});
  //     console.log("ca", res.data);
  //   }catch(err){
  //     console.log("err", err);
  //   }

  // }

  // const updateCard = (product: { _id: any; price: any }, type: string) => {
  //   const localCard = localStorage.getItem("card") as string;
  //   const prev = JSON.parse(localCard);
  //   let items: any[] = [];
  //   if (prev) {
  //     items = [...prev];
  //   }

  //   const prevProductIdx = items?.findIndex((item) => item?.product?._id === product?._id);

  //   console.log(type);
  //   if (prevProductIdx > -1) {
  //     const cnt = type === "inc" ? items[prevProductIdx].quantity + 1 : items[prevProductIdx].quantity - 1;
  //     if (cnt < 0) return;
  //     items[prevProductIdx].quantity = cnt;
  //     items[prevProductIdx].totalPrice = cnt * items[prevProductIdx].product.price;
  //   } else {
  //     items.push({ product, quantity: 1, totalPrice: product.price });
  //   }
  //   localStorage.setItem("card", JSON.stringify(items));
  //   setCartItems(items);
  // };


  return isLoading&&templates? (
    <>
      <Box>
        <Box>
          <Search searchWeb = {searchWeb}/>
        </Box>
        {!templatesFilter.length && <Box>Олдсонгүй</Box>}
       
      {templatesFilter.map((template:any, idx:any) => (
        <Grid key={idx}
          sx={{
            mb:"40px",
            background: "white",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            "&:hover": { scale: "1.06 ", overflowY: "hidden" },
          }}
        >
          <Box>
            <Box
              className="bounceTemplate"
              sx={{
                backgroundImage: `url(${template.image})`,
                backgroundRepeat: "no-repeat",
                width: "660px",
                height: "500px",
                backgroundPosition: "center 0",
                display: "block",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
              textAlign: "left",
            }}
          >
            <Typography variant="h6">{template?.name}</Typography>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
              <Typography
                sx={{
                  background: "gray",
                  width: "80px",
                  padding: "2px",
                  opacity: "0.5",
                  borderRadius: "5px",
                }}
              >
                {template.category?.title}
              </Typography>
              <IconButton  onClick={()=> addCart(template)} >
                <AddShoppingCartIcon sx={{color:"green", fontSize:"1.5rem"}}/>
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Link
                href={template.demoLink}
                sx={{
                  border: "solid 2px black",
                  color: "Black",
                  width: "150px",
                  padding: "13px",
                  borderRadius: "0",
                }}
              >
                PREVIEW
              </Link>
              <Link
              href={template.editLink}
                sx={{
                  background: "gray",
                  border: "solid 2px gray",
                  color: "white",
                  width: "150px",
                  padding: "13px",
                  borderRadius: "0",
                }}
              >
                Edit
              </Link>
            </Box>
          </Box>
        </Grid>
      ))}
     
      </Box>
    </>
  ):<Box sx={{ display: 'flex', height:'100vh' }}>
  <CircularProgress />
</Box>
};

export default WebsiteTemlatesCard;
