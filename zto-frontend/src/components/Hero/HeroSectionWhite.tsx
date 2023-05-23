import React from "react";
import Box from "@mui/material/Box";
import WhiteCard from "./HeroSectionWhiteCard";
import { Typography, Button, Container } from "@mui/material";

const HeroSectionWhite = () => {
  return (

    <Box
      id="right-side"
      className="side"
      sx={{
        backgroundImage:
          "url(https://pinecone.mn/background.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        maxWidth:"100%",
       
      }}
    >
      

        <Box sx={{textAlign:"center", marginTop:"5%", color:"#000"}}>
          <Typography sx={{fontSize:{lg:"54px", xs:"22px"}}}>Өөрийн зүйлийг өөрөө бүтээ.</Typography>
          <Typography sx={{my:"13px", fontSize:{lg:"34px", xs:"18px"}}} >Хүссэн загвараа эндээс ол</Typography>
          <Typography sx={{my:"13px", fontSize:{lg:"24px", xs:"14px"}}} >Туршаад үз таалагдана.</Typography>
        </Box>
        <div className="bounce__css">
          <WhiteCard />
        </div>
      </Box>
      
    
  );
};

export default HeroSectionWhite;
