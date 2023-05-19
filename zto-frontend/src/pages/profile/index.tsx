import React, { useContext } from 'react'
import FromInfo from '@/components/Profile/form'
import { Box, Container, Grid } from '@mui/material'
// import ProfileCard from '@/components/Profile/card'
import ForgetPass from '@/components/forgetPass'
import ProfileImg from '@/components/Profile/card'
import Layout from '@/components/layout'


const Profile = () => {
  
  return (
    <Layout>
    <Container>
    <Grid container spacing={2} sx={{marginTop:"5%", }}>
      <Grid item xs={12} sm={12} md={5} lg={4}>
       <ProfileImg/>
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={8}>
        <FromInfo/>
      </Grid>
    </Grid>
    {/* <ForgetPass/> */}
    </Container>
    </Layout>
  )
}

export default Profile