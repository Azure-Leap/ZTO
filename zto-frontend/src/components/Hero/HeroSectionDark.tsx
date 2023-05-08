import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
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
        maxWidth: "100%",
      }}
    >
     
      <Box sx={{ color:"#fff" }}>
          <Typography variant="h3">Өөрийн зүйлийг өөрөө бүтээ.</Typography>
          <Typography variant="h4" sx={{my:"10px"}}>Хүссэн загвараа эндээс ол</Typography>
          <Typography variant="h5">Туршаад үз таалагдана.</Typography>
        </Box>
        <div className="bounce__css">
          <DarkCard />
        </div>
      
    </Box>
  );
};

export default HeroSectionDark;
