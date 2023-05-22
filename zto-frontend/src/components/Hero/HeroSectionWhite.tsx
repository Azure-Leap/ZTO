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
      <Box sx={{ color:"#000"}}>

        <Box sx={{textAlign:"center", marginTop:"5%"}}>
          <Typography variant="h3">Өөрийн зүйлийг өөрөө бүтээ.</Typography>
          <Typography variant="h4" sx={{my:"10px"}} >Хүссэн загвараа эндээс ол</Typography>
          <Typography variant="h5">Туршаад үз таалагдана.</Typography>
        </Box>
        <div className="bounce__css">
          <WhiteCard />
        </div>
      </Box>
      
    </Box>
  );
};

export default HeroSectionWhite;
