import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const EmptyCart = () => {
  return (
    <>
             <Box sx={{
                  mt: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  color: "#040e3f",
                  height: "550px",
                  textAlign:"center",
                  p:"20px"
                  // boxShadow:
                  //   "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}>
                  <Typography variant="h4" fontWeight={600} >Таны сагс хоосон байна</Typography>
                  <Box>
                    <ProductionQuantityLimitsIcon sx={{fontSize:"20rem", my:"1rem"}}/>
                  </Box>
                  <Button href='website-templates/All%20templates'  variant="outlined" sx={{backgroundColor:"orange", color:"black"}}>
                     Templates
                  </Button>

        </Box> 

    </>
  )
}

export default EmptyCart