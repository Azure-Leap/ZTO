import React from "react";
import Box from "@mui/material/Box";
import Typography from "../Hero/Typography";
import Button from "./Button";
import WhiteCard from "./whiteCard";
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
      <img style={{ display: "none" }} alt="increase priority" />
      <Typography
        className="htitle"
        align="center"
        variant="h2"
        marginTop={10}
        marginLight={180}
      >
        Өөрийн зүйлийг өөрөө бүтээ.
      </Typography>
      <Typography
        className="title"
        variant="h5"
        marginLight={180}
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Хүссэн загвараа эндээс ол
      </Typography>
      <Box sx={{ marginLight: 180 }}>
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
        marginLight={180}
        variant="body2"
        color="inherit"
        sx={{ mt: 2 }}
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
