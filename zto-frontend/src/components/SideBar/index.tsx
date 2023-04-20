import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import Navbar from "../Navbar";
import SearchBreadcrumb from '../Search';

const webtype = ['All templates', 'Website', 'One page', 'eStore'];
export const categoryData = [
  { name: 'All', icon: "https://www.motocms.com/website-templates/images/category/all.svg" },
  { name: 'Business & Corporate ', icon: "https://www.motocms.com/website-templates/images/category/business.svg" },
  { name: 'Industry', icon: "https://www.motocms.com/website-templates/images/category/industry.svg" },
  { name: 'Medical & Healthcare', icon: "https://www.motocms.com/website-templates/images/category/medical.svg" },
  { name: 'Creative', icon: "https://www.motocms.com/website-templates/images/category/creative.svg" },
  { name: 'Food & Restaurant', icon: "https://www.motocms.com/website-templates/images/category/food.svg" },
  { name: 'Fashion & Beauty', icon: "https://www.motocms.com/website-templates/images/category/fashion.svg" },
  { name: 'Hotel & Travel', icon: "https://www.motocms.com/website-templates/images/category/hotel.svg" },
  { name: 'Sports & Entertainment', icon: "https://www.motocms.com/website-templates/images/category/sport.svg" },
  { name: 'Society & People', icon: "https://www.motocms.com/website-templates/images/category/society.svg" },
  { name: ' Home & Services', icon: "https://www.motocms.com/website-templates/images/category/home.svg" },
  { name: ' Technology', icon: "https://www.motocms.com/website-templates/images/category/technology.svg" },
  { name: 'Holidays & Events', icon: "https://www.motocms.com/website-templates/images/category/holidays.svg" },
]


const drawerWidth = 300;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List/>
      <Typography fontWeight={600} pl={"16px"} >Web types</Typography>
        <FormGroup>
          {webtype.map((text, index)=>(
           <ListItem>
            <FormControlLabel key={index}  control={<Checkbox />} label={text} />
          </ListItem>
          ))}
        </FormGroup>
      <List/>
      <List>
        <Typography >Categories</Typography>
        {categoryData.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Image src={item.icon} alt='Picture' width={25} height={25} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:"#fff",
          boxShadow: "none"
        }}
      >
        <Box sx={{backgroundColor:"#000"}}>          
          <Navbar/>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{display: { sm: 'none'},  pl:"36px" }}
          >
            <CategoryIcon/>
            <Typography variant='h6' sx={{pl:"10px"}}>All Category</Typography>
          </IconButton>
        </Box>
        <Box  sx={{mt:"10px"}}>
          <SearchBreadcrumb/>
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />       
      </Box>
    </Box>
  );
}
