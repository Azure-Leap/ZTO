import React from 'react'
import { Grid, Box } from '@mui/material'
import Button from '../editPage/onepirate/modules/components/Button'
import Search from './Search'


const catType = [
    {
      id:"1",
      Name:"ALL",
    },
    { id:"2",
      Name:"Business",
    },
    { id:"3",
      Name:"Services",
    },
    { id:"4",
      Name:"Story",
    },
    { id:"5",
      Name:"Events",
    },
    { id:"6",
      Name:"Nutrition",
    },
    { id:"7",
      Name:"Travel",
    },
    { id:"8",
      Name:"Blog",
    },
    { id:"9",
      Name:"Hotel",
    },
    { id:"10",
      Name:"Education",
    },
    ]
const CategoriesHead = () => {
  return (
    <Grid sx={{display:"flex",position:"sticky",top:"0px", height:"80px", alignItems:"center", flexDirection:"row",  justifyContent:"space-around", marginTop:"30px", width:"100%", zIndex:"11", backgroundColor:"transparent", backdropFilter:"saturate(100%) blur(80px)"}}>{
            catType.map((Template) => (
        <Button sx={{height:"20px", backgroundColor:"none", color:"black", fontSize:"17px", "&:hover":{border:"solid 1px", borderRadius:"0", height:"40px", padding:"15px"}}}>
            {Template.Name}
        </Button>))}
        <Box>
            <Search/>
        </Box>
    </Grid>
  )
}
export default CategoriesHead