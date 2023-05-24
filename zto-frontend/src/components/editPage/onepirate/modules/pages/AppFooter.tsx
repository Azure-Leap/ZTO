import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Link, Stack } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from "../components/Typography";

export default function AppFooter() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", textAlign:"center", backgroundColor:"#28282a", color:"#fff", py:"20px" }}>
    
        <Box sx={{display:"flex" , justifyContent:"space-around" }}>
          <Box>
            <IconButton color="secondary">
                <InstagramIcon/>
              </IconButton>
              <IconButton color="info" >
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <IconButton color="error">
                <YouTubeIcon />
              </IconButton>
              <IconButton color="info">
                <TwitterIcon/>
              </IconButton>
          </Box>
          <Box>
            <Typography>
              @2023 Pied Piper. ZTO.MN
            </Typography>
          </Box>

        </Box>
         
    </Box>
  );
}
