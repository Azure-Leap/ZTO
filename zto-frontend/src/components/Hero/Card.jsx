import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";

const cardImg=require('../../assets/img/Home.jpg')
const cardImg2=require('../../assets/img/Landing Page (1).jpg')

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
        <Image src={cardImg2} alt="" width={'100%'} className="CardImg" />
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
      imageURL:{cardImg},
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:{cardImg2},
      time: "3Days 4 Nights",
      rating: "4.7",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:"",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:"",
            time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:"",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:"",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:"",
      time: "3Days 4 Nights",
      rating: "4.7",
      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:"",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:"",
      time: "3Days 4 Nights",
      rating: "4.7",

      typeone: "Tour combo with return airport transfer",
      typetwo: "City Tour",
      typethree: "Curious Corner",
      typefour: "₹88,952",
    },
    {
      ner: "Swiss Apls",
      imageURL:"",
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
