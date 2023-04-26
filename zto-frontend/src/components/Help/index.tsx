import React from 'react';
import { Autocomplete, Box, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import HelpIcon from '@mui/icons-material/Help';

const datas=[
  {title: "И-Мэйлээр 7/24", text:"Системтэй холбоотой бүх төрлийн ерөнхий асуулт болон тулгарсан асуудлыг мэйлээр хүлээн авч богино хугацаанд шийдэж өгөх болно. Хувийн шинжтэй имэйлд бид хариу өгөхгүй болохыг анхаарна уу! support@greensoft.mn" , icon:<MarkEmailReadIcon sx={{fontSize:'3rem', color:'#000640'}} />},
  {title: "Онлайн чат тусламж", text:"Вэб админы зүгээс нарийн ур чадвар шаардсан /HTML, CSS, JAVASCRIPT/ зураг, текстүүдийг оруулах, засварлах талаар заавар зөвлөгөө өгөх онлайн чатын хэсэг байгаа бөгөөд танд асуудал гарсан бол бид танд туслахад үргэлж бэлэн байх болно." ,icon:<MarkChatReadIcon sx={{fontSize:'3rem', color:'#000640'}}/>},
  {title: " Онлайн гарын авлага", text:"Вэб сайт бүтээхтэй холбоотой иж бүрэн видео хичээл байгаа бөгөөд та эдгээр хичээлийг үзэж судлаад өөрийн хүссэн вэб сайтыг бүтээх боломжтой. Энэхүү онлайн гарын авлагад вэб бүтээхээс гадна хийсэн вэбээ хэрхэн амжилттай ажлуулах хичээл багтсан байгаа гэдгийг хэлхэд таатай байна." ,icon:<HelpIcon sx={{fontSize:'3rem', color:'#000640'}}/>},
]

const Help = () => {
  return (
    <>
      <Box textAlign={'center'} sx={{ backgroundColor: "#000624", color: "#fff", height: "50vh", py: "50px" }}>
        <Typography variant='h2'>Танд тусламж хэрэгтэй байна уу?</Typography>
        <Typography variant='h6'>Бид нараас асуух зүйлээ асууна уу?</Typography>
        <Box sx={{ mx: "auto", my: "50px", border: '1px black solid', width: "650px", borderRadius: "30px", backgroundColor: "#fff", color: '#000' }} >
          <SearchIcon sx={{ fontSize: "2.5rem", mt: "10px", color: "#0f62e6" }} />
          {/* <TextField id="standard-basic" placeholder="Search" type="search"  variant="standard"  sx={{width:"600px",  px:'15px', border:'none'}} /> */}
          <TextField id="standard-basic" placeholder="Search" type="search" sx={{ width: "600px", px: '15px', border: 'none' }} />
        </Box>
      </Box>
      <Box textAlign={'center'} py={'50px'}>
        <Typography variant='h3' >Тусламж үйлчилгээ</Typography>
        <Container>
        <Grid container spacing={2} my={'30px'} maxWidth={'100%'} columns={14}>
          {datas.map((data, idx)=>         
          <Grid key={idx} item xs={12} sm={12} md={6} lg={4} sx={{ borderRadius:"20px", boxShadow: 5, fontSize:'.5rem', m:'20px', p:'20px', maxWidth:"100%", ":hover":{backgroundColor:"#eeeeee"}}}>
            <Box>{data.icon}</Box>
            <Typography variant='h4'>
            {data.title}
            </Typography>
            <Typography variant='h6'>
            {data.text}
            </Typography>            
          </Grid>
        
          )}
        </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Help;


