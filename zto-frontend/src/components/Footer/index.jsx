import React from 'react'
import { Box } from '@mui/material'
import {Typography} from '@mui/material'
import {Button} from '@mui/material'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
  } from "react-icons/fa";

const TestFooter = () => {
  return (
    <Box sx={{backgroundColor:"white", color:"black", fontSize:"20px"}}>

<Box sx={{display:"flex", borderBottom:"1px solid black"}}>
        <Typography sx={{width:"90%", padding:"10px", lineHeight:"20px", fontSize:"30px"}}>
            ZTO
        </Typography>
        <Button sx={{width:"10%", borderLeft:"1px solid black", borderRadius:"0", color:"black"}}>
            Back to top
        </Button>
</Box>
<Box sx={{display:"flex", justifyContent:"space-between", padding:"10px", }}>
    <Box sx={{display:"flex", gap:"20px", }}>
    <Box>
        <Typography sx={{fontSize:"20px"}}>
            Trademark
        </Typography>
        <Typography sx={{fontSize:"20px"}}>
            Contact us
        </Typography>
        <Typography sx={{fontSize:"20px"}}>
            Distributors
        </Typography>
        <Typography sx={{fontSize:"20px"}}>
            Careers
        </Typography>
    </Box>
    <Box sx={{padding:"3px"}}>
        Help center
    </Box>
    </Box>
 
   <Box sx={{display:"flex"}}>
   <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
    <Box>NEWSLETTER</Box>
    <Box>
<input className="undur" type="text" placeholder='your email' />
    </Box>
    </Box>
    <Button sx={{backgroundColor:"blue", color:"white", margin:"9% 5% 10% 3%", borderRadius:"20px", width:"200px"}}>Subs</Button>
   </Box>
    
  <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
  <Box>
        Follow us
    </Box>
    <Box sx={{ display: "flex", gap: "2vh" }}>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaLinkedin />
        </Box>
  </Box>
</Box>
<Box sx={{display:"flex",justifyContent:"space-between", padding:"10px", borderTop:"1px solid black"}}>
    <Box>
    <Typography>
            2023 ZTO
        </Typography>
    </Box>
    <Box sx={{display:"flex", gap:"30px", }}>
    <Typography>
            Terms of Service 
        </Typography>
        <Typography>
            Privacy Policy
        </Typography>
        <Typography>
            Security
        </Typography>
        <Typography>
            Cookie Settings
        </Typography>
    </Box>
    <Box></Box>
</Box>
    </Box>
  )
}

export default TestFooter