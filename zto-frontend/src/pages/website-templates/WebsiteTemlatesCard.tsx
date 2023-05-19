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

 
  console.log('weblist',templates);

  // const addCart = async(id:any)=>{
  //   try{
  //     const res = await axios.post("http://localhost:9010/carts", {user:user._id, website:id});
  //     console.log("ca", res.data);
  //   }catch(err){
  //     console.log("err", err);
  //   }

  // }

 


  return isLoading&&templates? (
      <Box> 
        {!templatesFilter.length && <Box>Олдсонгүй</Box>}
  
       <Box sx={{display:"flex", gap:"40px", flexDirection:"row",flexWrap:"wrap",}}>
{templatesFilter.map((template:any, idx:any) => (
        <Grid  key={idx} 
          sx={{
            mb:"40px",
            background: "white",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            "&:hover": { scale: "1.06 ", overflowY: "hidden" },
          }}
        >
          <Box
              className="bounceTemplate"
              sx={{
                backgroundImage: `url(${template.image})`,
                backgroundRepeat: "no-repeat",
                width: "555px",
                height: "500px",
                backgroundPosition: "center 0",
                display: "block",
              }}
            ></Box>
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
              <IconButton  onClick={()=> addCart(template, "inc")} >
                <AddShoppingCartIcon sx={{color:"green", fontSize:"1.5rem"}}/>
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Link
                href={template.demoLink}
                sx={{
                  border: "solid 2px black",
                  color: "Black",
                  width: "80px",
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
              <Button
                sx={{
                  background: "gray",
                  border: "solid 2px gray",
                  color: "white",
                  width: "150px",
                  padding: "13px",
                  borderRadius: "0",
                }}
              >
                BUY
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
      </Box>
      </Box>
  ):<Box sx={{ display: 'flex', height:'100vh' }}>
  <CircularProgress />
</Box>

  
};

export default WebsiteTemlatesCard;
