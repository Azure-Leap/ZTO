
import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { CardMedia } from '@mui/material';


const catType = [
  {
    Id:"3",
    Name: "Munkhtur",
    About:".",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:"3",
    Name: "Ekhntuwshin",
    About:" .",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:"3",
    Name: "Angarag",
    About:" .",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
];
const About = () => {
  return (
    <Grid ><Grid sx={{display:"flex",  justifyContent:"space-between", margin:"240px", position:"relative"}}>
    <Grid>
              <Typography variant='h2' sx={{position:"sticky", top:"200px"}} className=''>Бидний тухай</Typography></Grid>
      <Grid  sx={{display:"flex", flexDirection:"column", gap:"90px"}}>{catType.map((card) => (
            <Grid key={card.Id}>
            <Grid>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
            <Box sx={{width:"600px", display:"flex", flexDirection:"column", gap:"30px"}}>
              <Box sx={{borderLeft:"solid 2px green", }}>  <Box sx={{marginLeft:"30px"}}> <Typography variant='h4'>
                {card.Name}
             </Typography></Box>
             <Box> 
               <Typography sx={{marginLeft:"30px", marginTop:"30px"}}>
                {card.About}
             </Typography>
             </Box></Box>
             <Box>    <CardMedia
              component="img"
              height="400"
              sx={{borderRadius:"120px 20px 80px 20px"}}
              image="https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="green iguana"
            /></Box>
            </Box>
          </Box>
        </Grid>
            </Grid>
          ))}</Grid>
        
    </Grid> </Grid>

  )
}
export default About


