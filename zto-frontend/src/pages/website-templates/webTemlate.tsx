import React from 'react'
import { Grid} from '@mui/material'
import Typography from '../editPage/onepirate/modules/components/Typography'
import {Pagination} from '@mui/material'
import CategoriesHead from './CategoriesHead'
import WebsiteTemlatesCard from './WebsiteTemlatesCard'


const WebTemlate = () => {
  return (
    <Grid sx={{textAlign:"center", margin:"0% 12% 0% 12%"}}>
      <Typography variant='h3' sx={{padding:"100px 0px 20px 0px"}}>
          WEBSITE TEMPLATES
      </Typography>
      <Typography sx={{margin:"40px 300px 40px 300px"}}>
          Choose the Microweber template, which fits for your website.
          Each template is a perfect example of how your website will look like.
          You can expand and modify the template or even start from scratch.
      </Typography>
    <Grid container spacing={0}  item xs={12} sx={{display:"flex", flexDirection:"row",  justifyContent:"space-around", marginTop:"30px",gap:"60px" }}>
          <CategoriesHead/>
          <WebsiteTemlatesCard/>
    </Grid>
          <Pagination sx={{marginLeft:"35%", marginTop:"2%"}} count={100} color="primary" />
    </Grid>
  )
}

export default WebTemlate