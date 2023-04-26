import React from "react";
import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import DarkCard from "./HeroSectionDarkCard";

const HeroSectionDark = () => {
  return (
    <Box
      id="left-side"
      className="side"
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1680967764054-97e008c5235b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1468&q=80)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
<<<<<<< HEAD
      }}
    >
      <Typography className="htitle" align="center" variant="h2" marginTop={10}>
        Өөрийн зүйлийг өөрөө бүтээ.
      </Typography>
      <Typography
        className="title"
        color="inherit"
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
      <Typography className="mintitle" variant="body2" sx={{ mt: 2 }}>
=======
        backgroundColor:"black"
      }} 
    >
      <Typography variant="h3" sx={{marginTop:"5%"}}>
        Өөрийн зүйлийг өөрөө бүтээ.
      </Typography>
      <Typography variant="h4" sx={{marginTop:"2%"}}>
        Хүссэн загвараа эндээс ол
      </Typography>
 
      <Typography variant="h5" sx={{marginTop:"2%", marginBottom:"3%"}}>
>>>>>>> Card
        Туршаад үз таалагдана.
      </Typography>
      <div className="bounce__css">
        <DarkCard />
      </div>
    </Box>
  );
};

export default HeroSectionDark;
