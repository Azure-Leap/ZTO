import React from 'react'
import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import MenuItem from '@mui/material/MenuItem';
import MinFooter from '@/components/MinFooter';
import Layout from '@/components/layout';

const aboutImg = require('../../assets/img/store.jpg')
const catType = [
  {
    Id:"3",
    Name: "Munkhtur",
    imageURL:
      "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    About: "text",
    Contact: "4.7",
    Type1:"jdsjflkds",
    Type2:"fjsldjf",
    Type1Text:"fkldsjflsdfkdsjfldsl",
    Type2Text:"slkfdsjfjdslfksd"

  },
  {
    Id:"2",
    Name: "Enkhtuvshin",
    imageURL:
    "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  About: "3Days 4 Nights",
  Contact: "4.7",
  Type1:"jdsjflkds",
  Type2:"fjsldjf",
  Type1Text:"fkldsjflsdfkdsjfldsl",
    Type2Text:"slkfdsjfjdslfksd"

  },
  {
    Id:"1",
    Name: "Angarag",
    imageURL:
    "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  About: "3Days 4 Nights",
  Contact: "4.7",
  Type1:"jdsjflkds",
  Type2:"fjsldjf",
  Type1Text:"fkldsjflsdfkdsjfldsl",
    Type2Text:"slkfdsjfjdslfksd"
  },
];
export default function About() {    
  return (
    <Layout>
    <Grid sx={{marginBottom:"20", marginTop:"10px", minHeight:'100vh'}}>
       <Typography variant='h3' sx={{textAlign:"center", marginTop:"40px", marginBottom:"40px"}}>Бидний тухай</Typography>
       <Box className="Aboutprofile-container" sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    {catType.map((card) => (
        <MenuItem key={card.Id}>
        <Grid>
      <Box className="Aboutprofile-card" sx={{width:"400px", display:"flex", flexDirection:"column", borderRadius:"4px", transition:"3s", overflow:"hidden", backgroundColor:"#f1f1f1", fontSize:"16px", lineHeight:"22px", color:"#000", boxShadow:"-5px -5px 25px rgba(0, 0, 0, 0.705)"}}>
    <Box className="Abouttop-card">
      <Image src={aboutImg} alt="user picture" width={400} height={260}/>
      <Box className="Aboutmenu-icon">
        <Box className="Aboutmenu Aboutitem1"></Box>
        <Box className="Aboutmenu Aboutitem2"></Box>  
      </Box>
      <Box className="Aboutmiddle-card" sx={{margin:"5px 25px"}}>
      <Typography className='Abouth2'></Typography>
    </Box>
    </Box>
    <Box className="Aboutmiddle-card" sx={{margin:"5px 25px"}}>
      <Typography sx={{fontSize:"20px", color:"#000", fontWeight:"600", margin:"12px 0", borderBottom:"4px solid rgba(1, 106, 175, 0.603)"}}>Name:</Typography>
      <Box className='Aboutpara'>{card.Name}:</Box>
    </Box>
    <Box className="Aboutmiddle-card" sx={{margin:"5px 25px"}}>
      <Typography sx={{fontSize:"20px", color:"#000", fontWeight:"600", margin:"12px 0", borderBottom:"4px solid rgba(1, 106, 175, 0.603)"}}>About:</Typography>
      <Box className='Aboutpara'>{card.About}</Box>
    </Box>
    <Box className="Aboutfooter" sx={{margin:"5px 25px", textAlign:"justify"}}>
      <Typography sx={{fontSize:"20px", color:"#000", fontWeight:"600", margin:"12px 0", borderBottom:"4px solid rgba(1, 106, 175, 0.603)"}}>Contact:</Typography>
      <Box className="flex" sx={{display:"flex"}}> 
      <a href="#" className="social-icon facebook"><FacebookOutlinedIcon sx={{width:"100px"}}/></a> 
      <a href="#" className="social-icon Instagram"><InstagramIcon  sx={{width:"100px"}}/></a>
      <a href="#" className="social-icon github"><GitHubIcon sx={{width:"100px"}}/></a>
      <a href="#" className="social-icon linkedin"><LinkedInIcon  sx={{width:"100px"}}/></a>
      </Box>
      <Box className="Aboutlinks">
        <address>{card.Type1}: <a href="" target="_blank">{card.Type1Text}</a></address>
        <address>{card.Type2}: <a href="">{card.Type2Text}</a></address>
      </Box>
  </Box>
      </Box>
    </Grid>
        </MenuItem>
      ))}
      </Box>
</Grid> 
</Layout>
  );
}