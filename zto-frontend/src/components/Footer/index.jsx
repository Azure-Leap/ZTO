import { Box, Typography } from "@mui/material";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100wh",
          justifyContent: "center",
          gap: "16vh",
          paddingBottom: "3vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
          <Typography>Product</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "3vh",
          borderTop: 1,
          borderBottom: 1,
          marginBottom: `0.5vh`,
        }}
      >
        <Box sx={{ display: "flex", gap: "3vh" }}>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaLinkedin />
        </Box>
        <Box sx={{ display: "flex", gap: "3vh" }}>
          <Typography>Terms of Use </Typography>
          <Typography>Privacy Policy </Typography>
          <Typography>© 2022-2023 ZTO.com, Inc</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
