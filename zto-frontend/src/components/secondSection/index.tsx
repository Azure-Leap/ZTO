import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Container, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText}from '@mui/material';
import Typography from '../Hero/Typography';
import { BorderBottom } from '@mui/icons-material';
import PsychologyIcon from '@mui/icons-material/Psychology';;
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import WifiFindIcon from '@mui/icons-material/WifiFind';
import UpdateIcon from '@mui/icons-material/Update';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const dataW=[
  {name:'Who', icon:<PsychologyIcon  style={{ height: '60px', width: '60px'}}/> , text:"Бизнесийнхээ нүүр царайг шинээр тодорхойлогч хүн бүрт зориулагдсан"},
  {name:'Why', icon:<QuestionMarkIcon  style={{ height: '60px', width: '60px'}}/>,  text: " Техник технологийн хурдацтай хөгжлийг ашиглан бид биенесээ дэлхийн зах зээлд танилцаалах боломж "},
  {name:'Where', icon:<AddLocationIcon  style={{ height: '60px', width: '60px'}}/>, text :"Дэлхийн хаанаас ч хандах боломжтой"},
  {name:'What', icon:<WifiFindIcon  style={{ height: '60px', width: '60px'}}/>, text: "Таны бизнесийг суртчиллах, таниулаж, хэрэглэгч болон түншийг олох боломж  "},
  {name:'When', icon:<UpdateIcon style={{ height: '60px', width: '60px'}}/>, text:"Танд интернет байвал  хэзээ ч хандах боломжтой"}
]

const img=require('../../assets/img/undraw_building_websites_i78t.png')

export default function BasicGrid() {
  return (
    <Box sx={{minHeight:'100vh'}}>
    <Container>
    <Box sx={{textAlign:'center', mt:"80px" }}>
      <Box sx={{ mx:'35%' }}>
        <Typography variant='h3' sx={{borderBottom: "8px #ff3d00 solid", width:'200px' }}>5W</Typography>
        <Typography variant='h3' sx={{pl:'100px'}} >Solution</Typography>
      </Box>   
      <Grid container spacing={1} justifyContent={'space-between'}>
        {dataW.map((w, idx)=>
       <Grid key={idx} item xs={12} sm={3} md={2} lg={2} fontWeight={600} sx={{borderRadius:"20px", border: '1px solid',  p:3, my:'30px', backgroundColor:"#000620", color:"#fff"}}>
        {/* <Box sx={{borderRadius:"50%"}}> */}
        <Box>{w.icon}</Box>
          <Typography variant='h4' >{w.name}</Typography>
        {/* </Box> */}
        </Grid>
        )}
      </Grid>
      </Box>
    <Box >
      <Grid container spacing={2} justifyContent={'center'} my={'50px'}>
      <Grid item xs={12} sm={12} md={5} lg={6}>
          <Image src={img} alt='second-img'  height={500} style={{width:'100%'}} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={5}>
          <Typography variant='h3' fontSize={'3rem'} fontWeight={500}>Вэбсайтын шинэлэг шийдэл </Typography>
        <List>
          {dataW.map((e, idx)=>
          <ListItem disablePadding key={idx}>
            <ListItemButton>
              <ListItemIcon sx={{color:"#000630"}}>
               {e.icon}
              </ListItemIcon>
              <ListItemText primary={e.text} sx={{pl:'10px'}} />              
            </ListItemButton>
          </ListItem>
          )}
        </List>
      
        </Grid>
      </Grid>
    </Box>
    
    </Container>
    </Box>
  );
}


