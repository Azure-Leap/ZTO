import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import EditForm from './editForm';
import ResponsiveAppBar from '@/components/Navbar';
import { Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CategoryIcon from '@mui/icons-material/Category';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';



const drawerWidth = 200;

const pages = [
    {name: "Hero", id:"#productHero", icon:<HomeIcon/>},
    {name: "Values", id:"#productValues", icon:<AcUnitIcon/>},
    {name: "Categories", id:"#productCategories", icon:<CategoryIcon/>},
    {name: "How it works", id:"#productHowItWork", icon:<WorkHistoryIcon/>},
    {name: "ProductCTA", id:"#productCTA", icon:<LocalOfferIcon/>},
] 

const EditSidebar = () =>  {
  return (
    <Box sx={{ display: 'flex',  marginTop:"5%" }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 , backgroundColor:"#fff"}} >
          <ResponsiveAppBar/>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{

          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt:"30px" }}>
          <List>
            {pages.map((text, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   {text.icon}
                  </ListItemIcon>
                  <Link href={text.id} underline="hover" color={"#000"} >{text.name}</Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Theme', 'Typography', 'Color', 'Size'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       <EditForm/>
      </Box>
    </Box>
  );
}
 

export default EditSidebar