import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Link, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';


export default function WebCard({changeState}:any) {
  const [template, setTemplates] = useState([]);
 
  const [webList, setWebList] = useState(template);

  const getWebsite = async () => {
    try {
      const res = await axios.get('http://localhost:9010/websites');
      console.log(res.data);
      setTemplates(res.data)
    } catch (err) {
      console.log("ERR", err);
    }
  }

  useEffect(() => {
    getWebsite()
  }, [changeState]);

  // const searchWeb = (e: any) => {
  //   console.log("fff", e.target.value);
  //   const filterCat = template.filter((web) => web.name?.toLowerCase().includes(e.target.value));
  //   setWebList(filterCat);
  // }

  // console.log("web", webList);

  return (
    <Grid >
      <Paper
        sx={{ p: '2px 4px', display: 'flex', flexDirection: "row", alignItems: 'center', width: "78%", marginLeft: "20%", marginTop: "-3%", marginBottom: "2%", sm: { width: '60%' }, md: { width: "50%" } }}
      >
        <IconButton sx={{ p: '10px' }}>
          <MenuIcon />
        </IconButton>
        <TextField
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search zto template"
          // inputProps={{ 'aria-label': 'search zto template' }}      
          // onChange={searchWeb}
        />

        <IconButton color="primary" type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton >
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>



      <Grid sx={{ display: "flex", flexWrap: "wrap", marginLeft: "20%" }}>
        {/* {template.map((item, idx) => (
          <MenuItem key={idx}>
            <Card sx={{ width: "450px" }}>
              <CardMedia
                // sx={{
                //   "&:hover": { scale: "120%", opacity: "0.5", },
                // }}
                component="img"
                height="250"
                src={item.image[0]}
              />
              <Typography>{item.name}</Typography>
              <Link href={item.demoLink}>
                Demo
              </Link>
              <Link href={item.editLink} sx={{ml:"20px"}}>
                Edit
              </Link>
            </Card>
          </MenuItem>
        ))} */}
      </Grid>
      <Pagination sx={{ marginLeft: "50%" }} count={100} color="primary" />
    </Grid>
  );
}