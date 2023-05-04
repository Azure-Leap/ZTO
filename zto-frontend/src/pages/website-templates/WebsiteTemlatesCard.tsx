import React from 'react'
import { Grid, Box} from '@mui/material'
import Typography from '../editPage/onepirate/modules/components/Typography'
import {Button} from '@mui/material'

const Temp = [
    {
      id:"1",
      Name:"Photography",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-photography/611/screenshot.jpg"
    },
    { id:"2",
      Name:"Business",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg"
    },
    { id:"3",
      Name:"Services",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-ziza/611/screenshot.jpg"
    }, 
    { id:"4",
      Name:"Story",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-banking/611/screenshot.jpg"
    },
    { id:"5",
      Name:"Events",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-photography/611/screenshot.jpg"
    },
    { id:"6",
      Name:"Nutrition",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-ziza/611/screenshot.jpg"
    },
    { id:"7",
      Name:"Travel",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-tony/611/screenshot.jpg"
    }, 
    { id:"8",
      Name:"Blog",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-ziza/611/screenshot.jpg"
    },
    { id:"9",
      Name:"Hotel",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-photography/611/screenshot.jpg"
    },
    { id:"10",
      Name:"Education",
      Type:"blog",
      Image:"https://packages.microweberapi.com/meta/microweber-templates-template-ziza/611/screenshot.jpg"
    },
    ]
const WebsiteTemlatesCard = () => {
  return (
    <>
    {Temp.map((Template) => (
    <Grid sx={{backgroundColor:"white", '&:hover': {scale:"1.06 ", overflowY:"hidden",},}}>
        <Box className="bounceTemplate" sx={{ backgroundImage:`url(${Template.Image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover",  width:"660px", height:"503px", }}></Box>
            <Box sx={{display:"flex", flexDirection:"column", gap:"20px", padding:"20px"}}>
            <Typography variant='h6'>
                {Template.Name}
            </Typography> 
            <Typography sx={{background:"gray", width:"40px", padding:"2px", opacity:"0.5", borderRadius:"5px"}}>
                {Template.Type}
            </Typography> 
            <Box sx={{display:"flex", gap:"10px"}}>
            <Button sx={{border:"solid 2px black", color:"Black", width:"150px", padding:"13px", borderRadius:"0"}}>
                PREVIEW
            </Button>
            <Button sx={{background:"gray", border:"solid 2px gray", color:"white", width:"150px", padding:"13px", borderRadius:"0"}}>
                START
            </Button>
            </Box>
            </Box> 
    </Grid>))}
    </>
  )
}

export default WebsiteTemlatesCard