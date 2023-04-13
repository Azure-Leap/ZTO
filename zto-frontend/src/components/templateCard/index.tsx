import * as React from 'react';
import { Box, Typography, Grid, } from '@mui/material';
import Image from 'next/image';

export default function TemplateList() {
    return (
        <Box  mt={40} mb={20} >
            <Typography variant="h4" fontWeight="600">
                Template
            </Typography>          
            <Box  sx={{
            display: "flex",
            marginTop: "5%",
            gap: "30px",
            overflowX: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }} >
          {itemData.map((x) => (
            <Box>
                <Image src={x.image} width={700} height={500} alt="name" />
                <Typography>{x.title}</Typography>

            </Box>
          ))}
          </Box>           
        </Box>

    );
}

const itemData = [
    {
        image: '/image/store.jpg',
        title: 'Store',
    },
    
    {
        image: '/image/food.jpg',
        title: 'Food',
    },
    {
        image: '/image/Home.jpg',
        title: 'Blog',
    },
    {
        image: '/image/fitnrss.jpg',
        title: 'Fitness',
    },
   
    {
        image: '/image/business.png',
        title: 'Business',
    },
   
    {
        image: '/image/technology.jpg',
        title: 'Technology',
    },
    {
        image: '/image/Landing Page.jpg',
        title: 'Blog',
    },
   
   
];