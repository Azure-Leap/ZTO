import React from "react";
import Box from "@mui/material/Box";
import WhiteCard from "./HeroSectionWhiteCard";
import { Typography, Button } from "@mui/material";

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
      <Typography variant="h3" sx={{ color: "black", marginTop: "5%" }}>
        Өөрийн зүйлийг өөрөө бүтээ.
      </Typography>
      <Typography variant="h4" sx={{ color: "black", marginTop: "2%" }}>
        Хүссэн загвараа эндээс ол
      </Typography>

      <Typography
        variant="h5"
        sx={{ color: "black", marginTop: "2%", marginBottom: "3%" }}
      >
        Туршаад үз таалагдана.
      </Typography>
      <div className="bounce__css">
        <WhiteCard />
      </div>
    </Box>
  );
};

export default HeroSectionWhite;
