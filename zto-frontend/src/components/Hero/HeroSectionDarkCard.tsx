import * as React from "react";
import { Grid, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";

const catType = [
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

const img = require("../../assets/img/undraw_Static_website_re_x70h.png");

export default function DarkCard() {
  return (
    <Grid sx={{ display: "flex", gap: "0.5%" }}>
      {catType.map((card) => (
        <MenuItem key={card.time}>
          <Grid
            sx={{
              padding: "10px ",
              width: "100%",
              borderRadius: "16px",
              boxShadow: "0px 4px 16px rgba(20, 158, 158, 0.25)",
              background: "black",
            }}
          >
            <Box>
              <Image src={img} alt="" width={310} height={260} />
            </Box>
            <Box>
              <Box
                sx={{
                  color: "white",
                  fontSize: "28px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "white",
                  }}
                >
                  <Box sx={{ color: "white" }}> {card.ner}</Box>
                  <Box>{card.rating}</Box>
                </Box>

                <Box sx={{ fontSize: "18px", marginBottom: "5%" }}>
                  {" "}
                  {card.time}
                </Box>
              </Box>
              {/* <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                  textABoxgn: "center",
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
                <Box>{card.typeone}</Box>
                <Box>{card.typetwo}</Box>
                <Box>{card.typethree}</Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  color: "white",
                  gap: "20% ",
                }}
              >
                <Box>{card.typefour}</Box>
              </Box> */}
            </Box>
          </Grid>
        </MenuItem>
      ))}
    </Grid>
  );
}
