import ResponsiveAppBar from '@/components/Navbar'
import OrderDetail from '@/components/orderDetail'
import { LatestProducts } from '@/components/orderDetail/templateLast'
import { Box, Container } from '@mui/material'
import React from 'react'

const OrderPage = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Container>
      <Box sx={{display:"flex", my:"50px", gap:"20px"}}>
        <OrderDetail />
        <LatestProducts/>
      </Box>
    </Container>
    </>
  )
}

export default OrderPage