import  React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Link, TextField, Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';

const catType = [{ name: 'Ecommerce', price:"500$", text:"Chiropractic Website Design", imageURL:"https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" }, 
 { name: "Website" , category:"Website", price:"40$", button:"", rating:"4.5", text:"Liquor Store Website Template", imageURL:"https://images.unsplash.com/photo-1682195620288-712f0b970b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}, 
 { name: "One page", category:"One page", price:"900$", button:"", rating:"5.0", text:"Makeup Artist Website Design", imageURL:"https://images.unsplash.com/photo-1680177377908-8fbdfe2947dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}, 
 { name: 'eStore', category:"Ecommerce", price:"6600$", button:"", rating:"4.3", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1682017812985-9961980f20d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
 { name: "Website" , category:"Building", price:"42$", button:"", rating:"4.5", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1682195620288-712f0b970b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}, 
 { name: "One page", category:"Car", price:"65$", button:"", rating:"0,9", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1680177377908-8fbdfe2947dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}, 
 { name: 'eStore', category:"Shopping", price:"67$", button:"", rating:"4.0", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1682017812985-9961980f20d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
 { name: "Website" , category:"Food", price:"45$", button:"", rating:"2.0", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1682195620288-712f0b970b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}, 
 { name: "One page", category:"Travel", price:"98$", button:"", rating:"1.5", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1680177377908-8fbdfe2947dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}, 
 { name: 'eStore', category:"Bus", price:"90$", button:"", rating:"1.7", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1682017812985-9961980f20d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
 { name: "Website" , category:"Export", price:"45$", button:"", rating:"4.7", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1682195620288-712f0b970b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}, 
 { name: "One page", category:"Alco", price:"45$", button:"", rating:"5.0", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1680177377908-8fbdfe2947dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}, 
 { name: 'eStore', category:"Nice", price:"99$", button:"", rating:"2.3", text:"Best Kindergarten Website Design", imageURL:"https://images.unsplash.com/photo-1682017812985-9961980f20d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
]

export default function Category() {  
  const [webList, setWebList] =useState(catType);
  const searchWeb = (e:any) =>{
    console.log("fff", e.target.value);
    const filterCat = catType.filter((web)=>web.category?.toLowerCase().includes(e.target.value));
    setWebList(filterCat);
  }
  return (
    <Grid >
  <Paper
      sx={{ p: '2px 4px', display: 'flex', flexDirection:"row", alignItems: 'center', width: "78%" , marginLeft:"20%", marginTop:"-3%", marginBottom:"2%", sm:{width:'60%'}, md:{width:"50%"}}}
    >
      <IconButton sx={{ p: '10px' }}>
        <MenuIcon />
      </IconButton>
      <TextField
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search zto template" 
        onChange={searchWeb}
      />
      <IconButton  color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton >
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
<Grid sx={{display:"flex", flexWrap:"wrap", marginLeft:"20%"}}>
    {webList.map((type) => (
        <MenuItem key={type.name}>
     <Card className='WebSitecard' sx={{borderRadius:"15px", width:"300px", overflow:"hidden"}} >
  <Box className='WebSiteimg-cont' sx={{overflow:"hidden", position:"relative"}}>
    <span className='WebSitedrop-down-window'>
      <Box sx={{display:"flex", flexDirection:"column", gap:"40px"}}>
        <Button sx={{bgcolor:"red", color:"black", width:"150px"}}>View</Button>
        <Button sx={{bgcolor:"green", color:"black"}}>Edit</Button>
      </Box>
    </span>
    <CardMedia
    sx={{"&:hover":{filter:"blur(1.5px)", transform:"scale(1)", opacity:"0.2",}}}
        component="img"
        height="300"       
        src={type.imageURL}
      />
  </Box>
  <Box className='WebSitecontent-cont'>
    <span className='WebSitecard-header'>{type.name}</span>
    <span className='WebSitecard-body'>{type.price}</span>
  </Box>
</Card>
        </MenuItem>
      ))}
</Grid>
<Pagination sx={{marginLeft:"50%"}} count={100} color="primary" />
    </Grid>
  );
}