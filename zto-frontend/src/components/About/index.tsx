
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
    Pic:"http://res.cloudinary.com/dso5fsmob/image/upload/v1685546837/puszo5xhirecftfayack.jpg"
  },
  {
    Id:"3",
    Name: "Б.Мөнхтөр",
    About:"Багийн гишүүн",
    Pic:"http://res.cloudinary.com/dso5fsmob/image/upload/v1685546765/yerkpn7uin2efljqqo6y.jpg"
  },
  {
    Id:"3",
    Name: "Ө.Ангараг",
    About:"Багийн гишүүн",
    Pic:"http://res.cloudinary.com/dso5fsmob/image/upload/v1685547078/se0dr9vfg3zjnmnmnroi.jpg"
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
             <Box sx={{maxWidth:"500px"}}>    
              <CardMedia
              component="img"
              height="500"
              sx={{borderRadius:"120px 20px 80px 20px",    height:{lg:"500px", md:"350px", xs:"200px"}, width:{lg:"500px", md:"350px", xs:"200px"} }}
              image={card.Pic}
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


