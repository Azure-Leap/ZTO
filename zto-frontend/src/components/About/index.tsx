
import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import { CardMedia } from '@mui/material';

const turuuImg = require('../../assets/img/turuu.jpg')
const tuvshinImg = require('../../assets/img/tuvshin.jpg')
const angaragImg = require('../../assets/img/angarag.jpg')

const catType = [
  {
    Id:"3",
    Name: "Д.Энхтүвшин",
    About:"Багийн ахлагч",
    Pic:
    "https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:"3",
    Name: "Б.Мөнхтөр",
    About:"Багийн гишүүн",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:"3",
    Name: "Ө.Ангараг",
    About:"Багийн гишүүн",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
];
const About = () => {
  return (
    <Grid sx={{width:{lg:"100%", xs:"100vh"}}} ><Grid sx={{display:{lg: "flex", xm:"flow"}, textAlign:{lg:"left", xs:"center"}, justifyContent:"space-between", margin:{lg:"240px", xs:"50px"}}}>
    <Grid>
            <Typography variant='h2' sx={{position:"sticky", top:"200px", marginBottom:{lg:"0", xs:"20px"} }}>Бидний тухай</Typography></Grid>
      <Grid sx={{display:"flex", flexDirection:"column", gap:"90px"}}>{catType.map((card) => (
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
              sx={{borderRadius:"120px 20px 80px 20px", height:{lg:"400px", xs:"200px"}}}
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


