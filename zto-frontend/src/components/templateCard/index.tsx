import * as React from 'react';
import { Box, Typography, Grid, Button, Container, } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function TemplateList() {
    return (
        <Box textAlign={'center'} sx={{py:"40px"}} >
            <Container>
            <Typography variant="h3" my={"25px"} >
                Та өөрийн бизнест тохирсон вэб хуудсаа эндээс олоорой!!
            </Typography>
            {/* <button className="rounded-full text-lg w-20">Save Changes</button> */}
            <Button variant='outlined' sx={{ mt: "20px", px: "20px", fontSize: "1.5rem", backgroundColor:"#fff",   borderRadius:"30px"  }}>Get started</Button>

            <Box sx={{my:"25px", pt:"10px"}}>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper overflowY"
            > 
                {itemData.map((x)=>
                <SwiperSlide>
                    <img src={x.image} width={850} height={600} />
                    <Typography variant='h5'>{x.title}</Typography>
                </SwiperSlide>
                )}
            </Swiper>
            </Box>
            </Container>
        </Box>

    );
}

const itemData = [
    {
        image: 'https://static.wixstatic.com/media/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.jpg/v1/fit/w_1276,h_820,q_90/0784b1_5a7b4554103544dfb0cd5545fa46b78b~mv2.webp',
        title: 'Store',
    },

    {
        image: '/image/Landing Page (1).jpg',
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