import React from "react";
import Box from "@mui/material/Box";
<<<<<<< HEAD
import Typography from "../Hero/Typography";
import Button from "./Button";
import WhiteCard from "./whiteCard";
import Image from "next/image";

const img = require("../../assets/img/fitnrss.jpg");
=======
import WhiteCard from "./HeroSectionWhiteCard";
import { Typography, Button } from "@mui/material";
>>>>>>> Card

const HeroSectionWhite = () => {
  return (
    <Box
      id="right-side"
      className="side"
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1587981860944-9bc9573ed9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsb3VkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
<<<<<<< HEAD
      <Image src={img} alt="increase priority" style={{ display: "none" }} />
      <Typography className="htitle" align="center" variant="h2" marginTop={10}>
        Өөрийн зүйлийг өөрөө бүтээ.
      </Typography>
      <Typography
        className="title"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Хүссэн загвараа эндээс ол
      </Typography>
      <Box>
        <Button
          id="apple"
          variant="contained"
          size="large"
          component="a"
          href=""
          sx={{ minWidth: 200, background: "#075A6E" }}
        >
          Бүртгүүлэх
        </Button>
      </Box>
      <Typography
        className="mintitle"
        variant="body2"
        color="inherit"
        sx={{ mt: 2 }}
      >
=======
      <Typography variant="h3" sx={{color:"black", marginTop:"5%"}}>
        Өөрийн зүйлийг өөрөө бүтээ.
      </Typography>
      <Typography  variant="h4" sx={{color:"black", marginTop:"2%"}}
      >
        Хүссэн загвараа эндээс ол
      </Typography>
   
      <Typography  variant="h5" sx={{color:"black", marginTop:"2%", marginBottom:"3%"}}>
>>>>>>> Card
        Туршаад үз таалагдана.
      </Typography>
      <div className="bounce__css">
        <WhiteCard />
      </div>
    </Box>
  );
};

export default HeroSectionWhite;
