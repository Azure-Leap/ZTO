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
          "url(https://pinecone.mn/background.webp)",
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
