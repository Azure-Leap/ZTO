import React from 'react'
import { Box } from '@mui/system'
import Icon from '@mui/material/Icon'
import { Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MinFooter from '../../components/MinFooter';
import Image from 'next/image';
const NavAbout = () => {
  return (
    <Box sx={{ height:"89vh"}}>
      <Typography variant='h3' sx={{textAlign:"center", marginTop:"40px", marginBottom:"40px"}}>Бидний тухай</Typography>
    <div className="Aboutprofile-container">
      <div className="Aboutprofile-card">
    <Box className="Abouttop-card">
      <Image src="" alt="user picture"/>
      <Box className="Aboutmenu-icon">
        <Box className="Aboutmenu Aboutitem1"></Box>
        <Box className="Aboutmenu Aboutitem2"></Box>  
      </Box>
      <Box className="Aboutmiddle-card">
      <Typography className='Abouth2'></Typography>
    </Box>
    </Box>
    <Box className="Aboutmiddle-card">
      <Typography className='Abouth1'>About</Typography>
      <Box className='Aboutpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure earum, molestiae voluptatibus amet minus dolore.</Box>
    </Box>
    <Box className="Aboutfooter">
      <Typography className='Abouth1'>Contact</Typography>
      <Box className="flex" sx={{display:"flex"}}> 
      <a href="#" className="social-icon facebook"><FacebookOutlinedIcon sx={{width:"100px"}}/></a> 
      <a href="#" className="social-icon Instagram"><InstagramIcon  sx={{width:"100px"}}/></a>
      <a href="#" className="social-icon github"><GitHubIcon sx={{width:"100px"}}/></a>
      <a href="#" className="social-icon linkedin"><LinkedInIcon  sx={{width:"100px"}}/></a>
      </Box>
      <Box className="Aboutlinks">
        <address>neg yum bichne: <a href="" target="_blank">fdsfds</a></address>
        <address>neg yum bichne: <a href="">fsdfdsf</a></address>
      </Box>
  </Box>
      </div>
      <div className="Aboutprofile-card">
     
    <Box className="Abouttop-card">
      <Image src="" alt="user picture"/>
      <Box className="Aboutmenu-icon">
        <Box className="Aboutmenu Aboutitem1"></Box>
        <Box className="Aboutmenu Aboutitem2"></Box>
      </Box>
      <Box className="Aboutmiddle-card">
      <Typography className='Abouth2'></Typography>
    </Box>
    </Box>
    <Box className="Aboutmiddle-card">
      <Typography className='Abouth1'>About</Typography>
      <Box className='Aboutpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure earum, molestiae voluptatibus amet minus dolore.</Box>
    </Box>
    <Box className="Aboutfooter">
      <Typography className='Abouth1'>Contact</Typography>
      <Box className="flex" sx={{display:"flex"}}> 
      <a href="#" className="social-icon facebook"><FacebookOutlinedIcon sx={{width:"100px"}}/></a> 
      <a href="#" className="social-icon Instagram"><InstagramIcon  sx={{width:"100px"}}/></a>
      <a href="#" className="social-icon github"><GitHubIcon sx={{width:"100px"}}/></a>
      <a href="#" className="social-icon linkedin"><LinkedInIcon  sx={{width:"100px"}}/></a>
      </Box>
      <Box className="Aboutlinks">
        <address>neg yum bichne: <a href="" target="_blank">fdsfds</a></address>
        <address>neg yum bichne: <a href="">fsdfdsf</a></address>
      </Box>
  </Box>
      </div>
      <div className="Aboutprofile-card">
    <Box className="Abouttop-card">
      <Image src="" alt="user picture"/>
      <Box className="Aboutmenu-icon">
        <Box className="Aboutmenu Aboutitem1"></Box>
        <Box className="Aboutmenu Aboutitem2"></Box>
      </Box>
      <Box className="Aboutmiddle-card">
      <Typography className='Abouth2'></Typography>
    </Box>
    </Box>
    <Box className="Aboutmiddle-card">
      <Typography className='Abouth1'>About</Typography>
      <Box className='Aboutpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque iure earum, molestiae voluptatibus amet minus dolore.</Box>
    </Box>
    <Box className="Aboutfooter">
      <Typography className='Abouth1'>Contact</Typography>
      <Box className="flex" sx={{display:"flex"}}> 
      <a href="#" className="social-icon facebook"><FacebookOutlinedIcon sx={{width:"100px"}}/></a> 
      <a href="#" className="social-icon Instagram"><InstagramIcon  sx={{width:"100px"}}/></a>
      <a href="#" className="social-icon github"><GitHubIcon sx={{width:"100px"}}/></a>
      <a href="#" className="social-icon linkedin"><LinkedInIcon  sx={{width:"100px"}}/></a>
      </Box>
      <Box className="Aboutlinks">
        <address>neg yum bichne: <a href="" target="_blank">fdsfds</a></address>
        <address>neg yum bichne: <a href="">fsdfdsf</a></address>
      </Box>
    </Box>
      </div>
    </div>
    <MinFooter/>
    </Box>
  )
}
export default NavAbout