import React from 'react'
import { Box, Grid, Typography, Link, Container } from '@mui/material'
import { CardMedia } from '@mui/material';
import Cart from './Cart';

const TemplateCart = () => {
  return (
    <Grid sx={{width:"100%",  height:"86vh", backgroundColor:"#F0FFFF", zIndex:"10", overflow:"hidden"}}>
        <Grid sx={{ display:"flex"}}>
        <Grid sx={{ width:"50%", height:"86vh", backgroundColor:"white", zIndex:"2", padding:"0% 0% 0% 20%", boxShadow: " 50px 0px 100px 80px white ", backgroundBlendMode:"color-burn"}}>
            <Box sx={{marginBottom:"50px"}}>
                <Typography sx={{color:"blue", fontWeight:"bold"}}>
                    Product
                </Typography>
                <Box sx={{display:"flex"}}>
                    <Typography variant='h4' sx={{color:"#191970", fontWeight:"bold"}}>
                    Every component you need <span className='TemplateBlue'> is ready for production </span>
                    </Typography>
                </Box>
                <Typography sx={{color:"black"}}>
                Build at an accelerated pace without sacrificing flexibility or control.
                </Typography>
               
            </Box>
            <Box sx={{display:"flex", flexDirection:"column", gap:"30px"}}>
            <Box sx={{display:"flex", alignContent:"center", alignItems:"center", cursor:"pointer", gap:"20px", "&:hover": {
          background: "#F0F8FF",
          borderRadius:"20px"},}}>
                <Box>
                        <CardMedia
                        component="img"
                        sx={{width:"30px", height:"20px", borderRadius:"50%", background:"gray" }}
                        height="194"
                        image="https://mui.com/static/branding/product-core-light.svg"
                        alt="Paella dish"
                    />
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
                            <Typography sx={{color:"black", fontWeight:"bold"}}>
                                TEST
                            </Typography>
                            <Typography sx={{color:"black"}}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex necessitatibus animi eius. Minima, 
                            </Typography>
                            <Box sx={{display:"flex", fontWeight:"bold",padding:"3px",width:"110px", "&:hover": {
          background: "#FFFAF0",
          borderRadius:"20px"},}}>
                        <Link> Learn more</Link>
                      <Box sx={{width:"20px", }}>
                      <svg className="TemplateIcon" color='blue' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightRoundedIcon"><path d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
                      </Box>
                        </Box>
                 </Box>
                </Box>
                <Box sx={{display:"flex", alignContent:"center", alignItems:"center", cursor:"pointer", gap:"20px", "&:hover": {
          background: "#F0F8FF",
          borderRadius:"20px"},}}>
                <Box>
                        <CardMedia
                        component="img"
                        sx={{width:"30px", height:"20px", borderRadius:"50%", background:"gray" }}
                        height="194"
                        image="https://mui.com/static/branding/product-advanced-light.svg"
                        alt="Paella dish"
                    />
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
                            <Typography sx={{color:"black", fontWeight:"bold"}}>
                                TEST
                            </Typography>
                            <Typography sx={{color:"black",}}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex necessitatibus animi eius. Minima, 
                            </Typography>
                            <Box sx={{display:"flex", fontWeight:"bold",padding:"3px",width:"110px", "&:hover": {
          background: "#FFFAF0",
          borderRadius:"20px"},}}>
                        <Link> Learn more</Link>
                      <Box sx={{width:"20px", }}>
                      <svg className="TemplateIcon" color='blue' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightRoundedIcon"><path d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
                      </Box>
                        </Box>
                 </Box>
                </Box>
                <Box sx={{display:"flex", alignContent:"center", alignItems:"center", cursor:"pointer", gap:"20px", "&:hover": {
          background: "#F0F8FF",
          borderRadius:"20px"},}}>
                <Box>
                        <CardMedia
                        component="img"
                        sx={{width:"30px", height:"20px", borderRadius:"50%", background:"gray" }}
                        height="194"
                        image="https://mui.com/static/branding/product-templates-light.svg"
                        alt="Paella dish"
                    />
                </Box>
                
                <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
                            <Typography sx={{color:"black", fontWeight:"bold"}}>
                                Template
                            </Typography>
                            <Typography sx={{color:"black"}}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex necessitatibus animi eius. Minima, 
                            </Typography>
                            <Box sx={{display:"flex", fontWeight:"bold",padding:"3px",width:"110px", "&:hover": {
          background: "#FFFAF0",
          borderRadius:"20px"},}}>
                        <Link> Learn more</Link>
                      <Box sx={{width:"20px", }}>
                      <svg className="TemplateIcon" color='blue' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightRoundedIcon"><path d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
                      </Box>
                        </Box>
                 </Box>
                </Box>
                <Box sx={{display:"flex", alignContent:"center", alignItems:"center", cursor:"pointer", gap:"20px", "&:hover": {
          background: "#F0F8FF",
          borderRadius:"20px"},}}>
                <Box>
                        <CardMedia
                        component="img"
                        sx={{width:"30px", height:"20px", borderRadius:"50%", background:"gray" }}
                        height="194"
                        image="https://mui.com/static/branding/product-designkits-light.svg"
                        alt="Paella dish"
                    />
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
                            <Typography sx={{color:"black", fontWeight:"bold"}}>
                                Design
                            </Typography>
                            <Typography sx={{color:"black"}}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex necessitatibus animi eius. Minima, 
                            </Typography>
                        <Box sx={{display:"flex", fontWeight:"bold",padding:"3px",width:"110px", "&:hover": {
          background: "#FFFAF0",
          borderRadius:"20px"},}}>
                        <Link> Learn more</Link>
                      <Box sx={{width:"20px", }}>
                      <svg className="TemplateIcon" color='blue' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightRoundedIcon"><path d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path></svg>
                      </Box>
                        </Box>
                 </Box>
                </Box>
                    </Box>
        </Grid> 
       <Box sx={{zIndex:"1", marginLeft:"30%"}}>
       <Cart/>
       </Box>
 
</Grid>
</Grid>
   
  )
}

export default TemplateCart