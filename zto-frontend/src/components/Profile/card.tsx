import { Box, Button, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SendIcon from '@mui/icons-material/Send';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import UploadImg from './proImg';
import { AuthContext } from '@/context/UserContext';
const img = require("../../assets/img/profile.png");

const ProfileImg = () => {
  const {user}:any = useContext(AuthContext);
  // console.log("proimg", );
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const {img} =user.user
  return (
    <Box textAlign={"center"}>
      <UploadImg open={open} handleClose={handleClose}  />
        <Box sx={{  position:"relative"}}>
          <img
            src={user?.profileImg}
            width={250}
            height={250}
            alt={user?.name}
            style={{
              borderRadius: "50%",
            }}
          />
          <IconButton sx={{position:"sticky", mt:"-70px", ml:"-50px", backgroundColor:"#979a9b" , borderRadius:"50%" ,
            "&.MuiButtonBase-root:hover": {
            background: '#979a9b',
        }        
           }}
           onClick={handleOpen}>
            <CameraAltIcon sx={{fontSize:"2.3rem", color:"white", }}/>
          </IconButton>
        </Box>
        <Box sx={{ textAlign: "center", mt: "45px" }}>
          <Typography gutterBottom variant="h5" component="div">
            {user?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Senior Software Engineer
          </Typography>
            <Button variant="outlined" startIcon={<GroupAddIcon />} sx={{m:"10px", backgroundColor:"#262b40", color:"white",
                '&:hover': {
                  background: 'none',
                  color:"#262b40"
              }
              }}>
              Connect
            </Button>
            <Button variant="outlined" endIcon={<SendIcon /> } sx={{color:"#262b40"}}>
              Send
            </Button>
          
        </Box>
    </Box>
  
  )
}

export default ProfileImg