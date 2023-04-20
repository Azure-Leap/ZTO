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
          gap: "13vh",
          paddingBottom: "3vh",
          paddingTop: "3vh",
          borderTop: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography variant="h6">Product</Typography>
          <Typography variant="p">Website Templates</Typography>
          <Typography variant="p">Website Builder</Typography>
          <Typography variant="p">Website Design</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography variant="h6">Solutions</Typography>
          <Typography variant="p">Online Store</Typography>
          <Typography variant="p">Online Booking</Typography>
          <Typography variant="p">Restaurant Website</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography variant="h6">Learn</Typography>
          <Typography variant="p">Wix Blog</Typography>
          <Typography variant="p">Privacy and Security Hub</Typography>
          <Typography variant="p">SEO Learning Hub</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography variant="h6">Support</Typography>
          <Typography variant="p">Help Center</Typography>
          <Typography variant="p">Hire a Professional</Typography>
          <Typography variant="p">Report Abuse</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography variant="h6">Company</Typography>
          <Typography variant="p">Press & Media</Typography>
          <Typography variant="p">Investor Relations</Typography>
          <Typography variant="p">Wix Capital</Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <Typography variant="h5">ZTO.com</Typography>
          <Typography variant="p" sx={{ width: "20vh" }}>
            The Wix website builder offers a complete solution from
            enterprise-grade infrastructure and business features to advanced
            SEO and marketing tools–enabling anyone to create and grow online.
          </Typography>
          <Typography variant="p">About</Typography>
          <Typography>Contact Us</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "3vh",
          borderTop: 1,
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
