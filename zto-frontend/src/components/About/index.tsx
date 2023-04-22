import React from 'react'
import { Box } from '@mui/system'
import Icon from '@mui/material/Icon'
import { Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <Box sx={{marginBottom:"80px"}}>
      <Typography variant='h3' sx={{textAlign:"center", marginTop:"40px", marginBottom:"40px"}}>Бидний тухай</Typography>
    <div className="Aboutprofile-container">
      <div className="Aboutprofile-card">
    <Box className="Abouttop-card">
      <img src="https://images.pexels.com/photos/15006072/pexels-photo-15006072.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user picture"/>
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
      <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="user picture"/>
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
      <img src="https://cdn.pixabay.com/photo/2023/01/29/10/09/street-7752940__480.jpg" alt="user picture"/>
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
    </Box>
  )
}
export default About