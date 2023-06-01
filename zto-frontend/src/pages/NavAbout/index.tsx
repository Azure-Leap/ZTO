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

// const turuuImg = require('../../assets/img/turuu.jpg')
// const aboutImg = require('../../assets/img/tuvshin.jpg')
const aboutImg = require('../../assets/img/store.jpg')
const catType = [
  {
    Id:"3",
    Name: "Б.Мөнхтөр",
    img:"http://res.cloudinary.com/dso5fsmob/image/upload/v1685546765/yerkpn7uin2efljqqo6y.jpg",
    Type1Text:"Багийн гишүүн",
    Type2Text:"Full stack developer"

  },
  {
    Id:"2",
    Name: "Д.Энхтүвшин",
    img:"http://res.cloudinary.com/dso5fsmob/image/upload/v1685546837/puszo5xhirecftfayack.jpg",
  Type1Text:"Багийн ахлагч",
  Type2Text:"Full stack developer"

  },
  {
    Id:"1",
    Name: "Ө.Ангараг",
    img:"http://res.cloudinary.com/dso5fsmob/image/upload/v1685547078/se0dr9vfg3zjnmnmnroi.jpg",
  Type1Text:"Багийн гишүүн",
    Type2Text:"Full stack developer"
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
      <img src={`${card.img}`} alt="user picture" style={{width:"400px", height:"400px"}}/>
      <Box className="Aboutmenu-icon">
        <Box className="Aboutmenu Aboutitem1"></Box>
        <Box className="Aboutmenu Aboutitem2"></Box>  
      </Box>
      <Box className="Aboutmiddle-card" sx={{margin:"5px 25px"}}>
      <Typography className='Abouth2'></Typography>
    </Box>
    </Box>
    <Box className="Aboutmiddle-card" sx={{margin:"5px 25px"}}>
      <Typography sx={{fontSize:"20px", color:"#000", fontWeight:"600", margin:"12px 0", borderBottom:"4px solid rgba(1, 106, 175, 0.603)"}}>Name: {card.Name}</Typography>
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
        <address> <a href="" target="_blank">{card.Type1Text}</a></address>
        <address> <a href="">{card.Type2Text}</a></address>
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