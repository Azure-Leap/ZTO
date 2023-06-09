import * as React from "react";
import { Grid, Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import {Button} from "@mui/material";

const catType = [
  {
    ner: "Editorial",
    imageURL:
      "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
    "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
    "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
    "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
    "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
    "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
    "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
    "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
    "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
  {
    ner: "Editorial",
    imageURL:
       "https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg",
    time: "WunderUI - design system",
    rating: "USD",

    typeone: "By Klywebmedia",
    typetwo: "from",
    typethree: "89",
    typefour: "View Product",
  },
];

const img = require("../../assets/img/screenshot.jpg");

export default function DarkCard() {
  return (
    <Grid sx={{ display: "flex", gap: "0.5%", width:"100vw",}}>
      {catType.map((card) => (
        <MenuItem key={card.time}>
          <Grid
            sx={{
              height:{lg:"600px", xs:"300px"},
              width: {lg:"400px", xs:"150px"},
              borderRadius: "16px",
              boxShadow: "0px 4px 16px rgba(20, 158, 158, 0.25)",
              background: "black",
            }}
          >
            <Box>
            <Box
              sx={{
                backgroundImage: `url(https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize:"cover",
                width: "100%",
                height: {lg:"350px" , xs: "150px"},
                backgroundPosition: "center 0",
                display: "block",
                borderRadius:"20px 20px 0px 0px"
              }}
            ></Box>
            </Box>
            <Box >
            <Box sx={{borderBottom:"solid 2px gray"}}>
              <Box sx={{padding:"20px"}}>
              <Box sx={{fontSize:{lg:"14px", xs:"8px"}}} >
                Editorial
              </Box>
              <Box sx={{  fontSize:{lg:"25px", xs:"8px"}}}>
                WunderUI-design system
              </Box>
              </Box>
            </Box>
      <Box sx={{borderBottom:"solid 2px gray"}}>
      <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between" , alignItems:"center", padding:"20px",fontSize:{lg:"25px", xs:"8px"} }}>
            <Box sx={{display:"flex", flexDirection:"row", gap:"10px",  }}>
              <Box>
                By
              </Box>
              <Box>
                ZTO
              </Box>
          </Box>
            <Box sx={{display:"flex", flexDirection:"row", gap:"10px", alignContent:"center", alignItems:"center" }}>
                <Box>
                  from
                </Box>
                <Box sx={{fontSize:{lg:"25px", xs:"8px"}}} >
                  34.9
                </Box>
                <Box sx={{fontSize:"10px"}}>
                  USD
                </Box>
            </Box>
            </Box>
      </Box>
            <Button sx={{color:"white",padding:{lg:"20px", xs:"10px"}, fontSize:{lg:"25px", xs:"8px"}}}>
              View Product
            </Button>
            
            </Box>
            
          </Grid>
        </MenuItem>
      ))}
    </Grid>
  );
}
