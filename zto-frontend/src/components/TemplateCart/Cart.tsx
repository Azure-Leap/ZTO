import React from 'react'
import { Box, Typography, Grid, Link, CardMedia } from '@mui/material'


const catType = [
  {
    Id:"3",
    Name: "Go to store",
    About:".",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:"3",
    Name: "Go to store",
    About:" .",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:"3",
    Name: "Go to store",
    About:" .",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },  
  {
    Id:"3",
    Name: "Go to store",
    About:".",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:"3",
    Name: "Go to store",
    About:" .",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    Id:"3",
    Name: "Go to store",
    About:" .",
    Pic:"https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
];

const Cart = () => {
  return (
    <Box sx={{ height:"100vh", position:"relative"}}>
    <Grid sx={{ zIndex:"-1"}}>
        <Box sx={{ overflow:"hidden", fontSize:"1rem",gap:"80px",transformOrigin:"center center", left:"10%",lineHeight:"1.5", letterSpacing:"0", position:"absolute", zIndex:"100", display:"flex", transform:"translateX(-40%) rotateZ(-30deg) rotateX(8deg) rotateY(8deg);"}}>
<Box className='TemplateMove'sx={{display:"flex", flexDirection:"column", gap:"50px" }} > 
    {catType.map((card) => (
            <Grid key={card.Id}><Link  sx={{ position:"relative", display:"block", width:{lg:"400px", sm: "200px"}, height:"200px", boxShadow:"rgba(61, 71, 82, 0.25) 0px 4px 20px",objectFit:"cover", borderWidth:"6px", borderStyle:"solid 2px", borderImage:"initial"}}   aria-label="Go to MUI Store" href="https://mui.com/store/items/berry-react-material-admin/?utm_source=marketing&amp;utm_medium=referral&amp;utm_campaign=home-cta" target="_blank" >
          
          <CardMedia
component="img"
sx={{width:"400px", height:"200px"}}
height="194"
image="https://mui.com/static/branding/store-templates/template-2light.jpg"
alt="Paella dish"/>
<Box  sx={{display:"flex", position:"absolute", top:"0", borderRadius:"10px", width:"100%", height:"100%", opacity:"0", left:"0", alignContent:"center", alignItems:"center", justifyContent:"center", "&:hover":{opacity:"0.8", backgroundColor:"gray", borderRadius:"0px", color:"black"} }}>
<Typography>{card.Name}</Typography>
<Box sx={{width:"20px", color:"rgb(255, 255, 255)", boxSizing:"inherit", userSelect:"none", display:"inline-block", fill:"currentcolor", flexShrink:"0"}}>
<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchRoundedIcon">
<path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z"></path></svg>
</Box>
</Box>
</Link>
</Grid>
))}
</Box>
<Box className='TemplateMoveTwo' sx={{display:"flex", flexDirection:"column", gap:"50px", marginTop:"60px"}}>
{catType.map((card) => (
            <Grid key={card.Id}><Link  sx={{ position:"relative", display:"block", width:"400px", height:"200px", boxShadow:"rgba(61, 71, 82, 0.25) 0px 4px 20px",objectFit:"cover", borderWidth:"6px", borderStyle:"solid 2px", borderImage:"initial"}}   aria-label="Go to MUI Store" href="https://mui.com/store/items/berry-react-material-admin/?utm_source=marketing&amp;utm_medium=referral&amp;utm_campaign=home-cta" target="_blank" >
               <CardMedia
component="img"
sx={{width:"400px", height:"200px"}}
height="194"
image="https://mui.com/static/branding/store-templates/template-2light.jpg"
alt="Paella dish"/>
<Box  sx={{display:"flex", position:"absolute", top:"0", borderRadius:"10px", width:"100%", height:"100%", opacity:"0", left:"0", alignContent:"center", alignItems:"center", justifyContent:"center", "&:hover":{opacity:"0.8", backgroundColor:"gray", borderRadius:"0px", color:"black"} }}>
<Typography>{card.Name}</Typography>
<Box sx={{width:"20px", color:"rgb(255, 255, 255)", boxSizing:"inherit", userSelect:"none", display:"inline-block", fill:"currentcolor", flexShrink:"0"}}>
<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LaunchRoundedIcon">
<path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z"></path></svg>
</Box>
</Box>
</Link>
</Grid>
))}
</Box>
</Box>  
</Grid>

    </Box>
  )
}

export default Cart

