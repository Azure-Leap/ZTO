import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
// import { Pagination } from "swiper";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <Box sx={{ py: "30px", backgroundColor: "#000", color: "#ffffff"}}>
            <Container>
             <Box textAlign={"center"}>
                <Typography variant="h2" fontSize={'4rem'} fontWeight={600} >Та өөрийн бизнест тохирсон вэб сайтаа эндээс олоорой</Typography>
                <Typography sx={{my: '10px'}} fontSize={'1.25rem'} >Get a headstart on your journey with 900+ free, customizable website templates, strategically
researched and tailored for every industry — or start from a blank canvas on our website builder.</Typography>
                <Button variant="outlined" 
                sx={{ mt: "20px", p: "15px, 20px", fontSize: "1.3rem",
                backgroundColor:'#fff', color:"#000",  
                ":hover": {
                    bgcolor: "#eeeeee",
                    color: "#000"},
                 borderRadius: "30px" }}>
                    Get started
                </Button>
             </Box>
            </Container>
            <Box sx={{m:"50px 70px"}}>

                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        2100: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },

                    }}
                    navigation={true}
                    className="mySwiper"
                >
                    {itemData.map((item, idx) => (

                        <SwiperSlide key={idx} >
                          
                                <img                             
                                    src={item.image}
                                    alt="Illustration of a person carrying ideas for a professional website design"
                                    width={'100%'}
                                    height={'520px'} 
                                />
                            <Link href={'/'} >
                                {item.title}
                            </Link>                        
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Box>
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