import React from "react";
import Box from "@mui/material/Box";
import Typography from "../Hero/Typography";
import Button from "./Button";
import Cardnine from "./Card";
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
      }}
    >
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
        color="inherit"
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
        sx={{ mt: 2 }}
      >
        Туршаад үз таалагдана.
      </Typography>
      <div className="bounce__css">
        <Cardnine />
      </div>
    </Box>
  );
};

export default HeroSectionDark;
