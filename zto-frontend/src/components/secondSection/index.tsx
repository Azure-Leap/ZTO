import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Container, Grid}from '@mui/material';
import Typography from '../Hero/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Container>
    <Box sx={{ position:'relative', flexGrow: 1, my:"80px", height:'80vh' }}>
      <Grid container spacing={2} justifyContent={'center'}>
      <Grid item xs={12} sm={12} md={5} lg={6}>
          <img src='https://images04.nicepage.com/feature/502095/mobile-friendly-web-design.jpg' width={"500px"} />
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={6}>
          <Typography variant='h2' fontSize={'4rem'} fontWeight={500}>Вэбсайтын шинэлэг шийдэл </Typography>
          <Typography variant='h6'>
          Мэдээлэл, технологийн энэ цаг үед Вэб сайт тухайн байгууллагын нүүр царай болж байна.<br></br> Зах зээл, захиалагчийнхаа хэрэгцээ, шаардлагаар дахин нэг шинэ бүтээгдэхүүн, өөр сонголтыг нэвтрүүлж байгаагаа дуулгахад таатай байна. Мэргэжлийн түвшинд өнгө загварын шийдлийг шуурхай, хямд зардлаар танд хүргэх нь энэ бүтээгдэхүүний онцлог оршино.        
          </Typography>
          <Typography variant='h6'>Та өөрийн хүссэн газраасаа, чухал цаг мөчид, өөрт байгаа төхөөрөмжнөөсөө хандан хэрэгцээт мэдээллээ түргэн шуурхай авах боломжтой</Typography>
        </Grid> 

      </Grid>
    </Box>
    </Container>
  );
}


