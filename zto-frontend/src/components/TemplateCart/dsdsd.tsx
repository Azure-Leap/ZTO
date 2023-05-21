
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

    <>    
    {catType.map((card) => (
            <Grid key={card.Id}>
          
              
                {card.Name}
            
                {card.About}
        
            </Grid>
          ))}
        
    </>

  )
}
export default About


