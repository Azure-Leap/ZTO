import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
const Cardninedata = ({ card }) => {
  return (
    <Grid
      sx={{
        padding: "10px ",
        borderRadius: "16px",
        boxShadow: "0px 4px 16px rgba(20, 158, 158, 0.25)",
        background: "black",
      }}
    >
      <Box
        sx={{
          marginBottom: "4%",
          opacity: "1",
          width: "280px",
          height: "280px",
        }}
      >
        <img src={`${card.imageURL}`} alt="" width={'100%'} className="CardImg" />
      </Box>
      <Box>
        {" "}
        <Box
          sx={{
            color: "dark",
            fontSize: "28px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box> {card.ner}</Box>
            <Box>
              <StarIcon />
              {card.rating}
            </Box>
          </Box>

          <Box sx={{ fontSize: "18px", marginBottom: "5%" }}> {card.time}</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
            marginBottom: "5%",
          }}
        ></Box>
        <Box
          sx={{
            fontSize: "18px",
            marginBottom: "5%",
            color: "white",
          }}
        >
          <li>{card.typeone}</li>
          <li>{card.typetwo}</li>
          <li>{card.typethree}</li>
        </Box>
        <Box
          sx={{
            display: "flex",

            gap: "20% ",
          }}
        >
          <Box>{card.typefour}</Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
              {card.typefive}
            </Box>
            <Box sx={{ marginTop: "7%" }}>{card.typesix}</Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

const Cardnine = () => {
  const coti = [
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1680695919961-9a47baa429ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1681069693474-605332820d67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1653140296827-ecff35bfa281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1680695919961-9a47baa429ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1681069693474-605332820d67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:
        "https://images.unsplash.com/photo-1653140296827-ecff35bfa281?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
  ];
  return (
    <Grid>
      <Box
        sx={{ display: "flex", gap: "0.5%", padding: "20px", width: "1920px" }}
      >
        {coti.map((card, index) => (
          <Cardninedata key={index} card={card} />
        ))}
      </Box>
    </Grid>
  );
};

export default Cardnine;
