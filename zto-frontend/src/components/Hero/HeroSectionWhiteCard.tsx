import * as React from "react";
import { Grid, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { relative } from "path";

const catType = [
  {
    ner: "Swiss Apls",
    imageURL:
      "https://images.unsplash.com/photo-1681066471028-dec0c78b729c?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80",
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
      "https://plus.unsplash.com/premium_photo-1680704120525-2e1adbe7281a?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
      "https://images.unsplash.com/photo-1681025243141-25cd6f243a13?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
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
      "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
      "https://images.unsplash.com/photo-1681121882740-561016c015dd?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1661956600654-edac218fea67?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80",
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
      "https://plus.unsplash.com/premium_photo-1680704120525-2e1adbe7281a?ixBoxb=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    time: "3Days 4 Nights",
    rating: "4.7",

    typeone: "Tour combo with return airport transfer",
    typetwo: "City Tour",
    typethree: "Curious Corner",
    typefour: "₹88,952",
  },
];

const img = require("../../assets/img/undraw_building_websites_i78t.png");

export default function Category() {
  return (
      <Grid sx={{ display: "flex", gap: "0.5%", width:"2000px" }}>
        {catType.map((card) => (
          <MenuItem key={card.time} >
            <Grid
              sx={{
                padding: "10px ",
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0px 4px 16px rgba(20, 158, 158, 0.25)",
                background: "white",
              }}
            >
              <Box>
                <Image src={img} alt="" width={310} height={260} />
              </Box>
              <Box>
                <Box
                  sx={{
                    color: "black",
                    fontSize: "28px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "black",
                    }}
                  >
                    <Box sx={{ color: "black" }}> {card.ner}</Box>
                    <Box>{card.rating}</Box>
                  </Box>

                  <Box sx={{ fontSize: "18px", marginBottom: "5%" }}>
                    {" "}
                    {card.time}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "black",
                    textABoxgn: "center",
                  }}
                ></Box>
                <Box
                  sx={{
                    fontSize: "18px",
                    marginBottom: "5%",
                    color: "black",
                  }}
                >
                  <Box>{card.typeone}</Box>
                  <Box>{card.typetwo}</Box>
                  <Box>{card.typethree}</Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    color: "black",
                    gap: "20% ",
                  }}
                >
                  <Box>{card.typefour}</Box>
                </Box>
              </Box>
            </Grid>
          </MenuItem>
        ))}
      </Grid>
   
  );
}
