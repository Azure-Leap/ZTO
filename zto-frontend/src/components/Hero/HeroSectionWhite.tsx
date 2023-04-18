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
          "url(https://plus.unsplash.com/premium_photo-1673795751644-e42b58452dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
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
        marginRight={170}
      >
        Өөрийн зүйлийг өөрөө бүтээ.
      </Typography>
      <Typography
        className="title"
        variant="h5"
        marginRight={170}
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Хүссэн загвараа эндээс ол
      </Typography>
      <Box sx={{ marginRight: 170 }}>
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
        marginRight={170}
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
