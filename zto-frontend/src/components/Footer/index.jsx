import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
// import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import Image from "next/image";

const pages = [
  { title: "Products", link: "/All templetes" },
  { title: "About", link: "/NavAbout" },
  { title: "Pricing", link: "/pricing" },
  { title: "Help", link: "/help" },
];

const datas = [
  {
    p: "Сөүл Бизнес центр 3 давхар, Улаанбаатар хот, Монгол улс",
    icon: <AddLocationAltOutlinedIcon />,
  },
  { p: "99998877", icon: <PhoneInTalkOutlinedIcon /> },
  { p: "ztoweb37@gmail.com", icon: <MailOutlinedIcon /> },
];
const logoImg = require("../../assets/img/zto-logo.png");

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        borderTop: "1px solid #979a9b",
        color: "#040e3f",
        py: "20px",
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          justifyContent={"space-between"}
          sx={{ fontSize: "1.3rem", mt: "30px" }}
        >
          <Grid item xs={12} sm={6} md={4} lg={4} textAlign={'center'} >
           
            <Image src={logoImg} alt="logo" height={150} width={150} style={{ borderRadius:"50%"}} />

            <Typography >
              Вэб сайтын эрин үед <br /> Энгийнээр, шинэлэг шийдье. <br />{" "}
              ZTO.MN
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} sx={{ ml: "auto" }}>
            <Typography variant="h5" fontWeight={600}>
              Products
            </Typography>
            {pages.map((page, idx) => (
              <Box key={idx} sx={{ my: "10px", pt: "5px" }}>
                <Link
                  href={page.link}
                  underline="hover"
                  sx={{ color: "#040e3f", fontSize: "1.2rem" }}
                >
                  {page.title}
                </Link>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4} sx={{ ml: "20px" }}>
            <Typography variant="h5" fontWeight={600}>
              Contact
            </Typography>
            {datas.map((x, idx) => (
              <Box key={idx} sx={{ display: "flex", my: "10px" }}>
                <IconButton>{x.icon}</IconButton>
                <Typography sx={{ pl: "5px", pt: "5px" }}>{x.p}</Typography>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
