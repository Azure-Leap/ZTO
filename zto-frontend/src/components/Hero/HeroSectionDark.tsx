import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button, Container } from "@mui/material";
import DarkCard from "./HeroSectionDarkCard";

const HeroSectionDark = () => {
  return (
    <Box
      position={"relative"}
      id="left-side"
      className="side"
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1680967764054-97e008c5235b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        
        width:{lg:"100%", xs:"100vh"},
   
        
     
      }}
    >
      <Box sx={{ color:"#fff", textAlign:"center", marginTop:"5%"}}>
          <Typography sx={{fontSize:{lg:"54px", xs:"22px"}}} >Өөрийн зүйлийг өөрөө бүтээ.</Typography>
          <Typography  sx={{my:"13px", fontSize:{lg:"34px", xs:"18px"}}}>Хүссэн загвараа эндээс ол</Typography>
          <Typography sx={{my:"13px", fontSize:{lg:"24px", xs:"14px"}}}>Туршаад үз таалагдана.</Typography>
        </Box>
        <div className="bounce__css">
          <DarkCard />
        </div>
      
    </Box>

  );
};

export default HeroSectionDark;
