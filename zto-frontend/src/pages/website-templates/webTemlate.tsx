import React, { useEffect, useState } from 'react'
import { Container, Grid} from '@mui/material'
import Typography from '../editPage/onepirate/modules/components/Typography'
import {Pagination} from '@mui/material'
import CategoriesHead from './CategoriesHead'
import WebsiteTemlatesCard from './WebsiteTemlatesCard'
import axios from 'axios'
import Layout from '@/components/layout'


const WebTemlate = () => {
  const [templates, setTemplates] = useState([]);
  const [templatesFilter, setTemplatesFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTemp = async () => {
    try {
      const res = await axios.get(`${BASE_API_URL}/websites`);
      console.log("tem", res.data);
      setTemplates(res.data);
      setTemplatesFilter(res.data);
      setIsLoading(true);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getTemp();
  }, []);
  return (
  
       <Layout>
    <Grid sx={{textAlign:"center", margin:{xs:"0"}, width:{lg:"100vw", xs:"100vh"}}}>
      <Typography variant='h3' sx={{padding:{lg:"100px 0px 20px 0px", xs:"0px"}, fontSize:{lg:"50px", xs:"20px"}}}>
          WEBSITE TEMPLATES
      </Typography> 
      <Typography sx={{margin:{lg:"40px 300px 40px 300px"} }}>
          Choose the Microweber template, which fits for your website.
          Each template is a perfect example of how your website will look like.
          You can expand and modify the template or even start from scratch.
      </Typography>
    <Grid container spacing={0}  item xs={12} sx={{display:"flex", flexDirection:"row",  justifyContent:"space-around", marginTop:"30px",gap:"50px" }}>
         
          <Container>
          <CategoriesHead templates={templates}  setTemplatesFilter={setTemplatesFilter} templatesFilter={templatesFilter}/>
          <WebsiteTemlatesCard templates={templates} isLoading={isLoading}  setTemplatesFilter={setTemplatesFilter} templatesFilter={templatesFilter}/>
          </Container>
         
    </Grid>
    <Grid sx={{alignContent:"center", alignItems:"center"}}>
    <Pagination sx={{marginLeft:"40%"}} count={100} color="primary" />
    </Grid>
  
    </Grid>
    </Layout>
   
  )
}

export default WebTemlate;
