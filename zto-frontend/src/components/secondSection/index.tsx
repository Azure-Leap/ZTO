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
    <Box sx={{ flexGrow: 1, my:"120px" }}>
      <Grid container spacing={2} justifyContent={'center'}>
      <Grid item xs={6}>
          <img src='/image/undraw_building_websites_i78t.png' width={"500px"} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h2'>Вэбсайтаа өөрөө бүтээе</Typography>
          <Typography variant='h6'>
          Мэдээлэл, технологийн энэ цаг үед Вэб сайт тухайн байгууллагын нүүр царай болж байна.<br></br> Зах зээл, захиалагчийнхаа хэрэгцээ, шаардлагаар дахин нэг шинэ бүтээгдэхүүн, өөр сонголтыг нэвтрүүлж байгаагаа дуулгахад таатай байна. Мэргэжлийн түвшинд өнгө загварын шийдлийг шуурхай, хямд зардлаар танд хүргэх нь энэ бүтээгдэхүүний онцлог оршино.        
          </Typography>
        </Grid> 

      </Grid>
    </Box>
    </Container>
  );
}


