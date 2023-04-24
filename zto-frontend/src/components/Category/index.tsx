import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';
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
  return (
    <Grid>
  <Paper
      sx={{ p: '2px 4px', display: 'flex', flexDirection:"row", alignItems: 'center', width: "78%" , marginLeft:"20%", marginTop:"-3%", marginBottom:"2%"}}
    >
      <IconButton sx={{ p: '10px' }}>
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search zto template"
        inputProps={{ 'aria-label': 'search zto template' }}
      />
      <IconButton  color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>

<Grid sx={{display:"flex", flexWrap:"wrap", marginLeft:"20%"}}>
    {catType.map((type) => (
        <MenuItem key={type.name}>
        <Card sx={{width:"450px"}}>
      <CardMedia
      sx={{
        "&:hover":  { scale: "120%", opacity:"0.5", } ,
  }}
        component="img"
        height="150"       
        src={`${type.imageURL}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"   >
        {type.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {type.text}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
      <Typography variant="h6" color="green">
        {type.price}
        </Typography>
    <Grid sx={{display:"flex", gap:"20px"}}>    
      
     <Link href='http://127.0.0.1:5500/zto-frontend/src/pages/Template/index.html'><Button variant="contained" color="warning">
        Demo
        </Button></Link>
        
     
        <Button variant="contained" color="success">
        Share
        </Button>
    </Grid>
        </CardActions>
            </Card>
        </MenuItem>
      ))}
</Grid>
<Pagination sx={{marginLeft:"50%"}} count={100} color="primary" />
    </Grid>
  );
}