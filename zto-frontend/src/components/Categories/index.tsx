import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
} from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import Navbar from "../Navbar";
import SearchBreadcrumb from "../Search";
import axios from "axios";
import MinFooter from "../MinFooter";
import Website from "../Websities";

const webtype = ["All templates", "Website", "One page", "eStore"];
const drawerWidth = 200;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const [categories, setCategories] = useState([]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getCategory = async () => {
    try {
      // const res = await axios.get("https://zto-server.onrender.com/categories");
      const res = await axios.get("http://localhost:9010/categories");

      setCategories(res.data);
    } catch (err) {
      console.log("ERR", err);
    }
  };
  useEffect(() => {
    getCategory();
  }, []);
  console.log(categories);
  const drawer = (
    <div>
      <Toolbar />
      <List />
      <Typography fontWeight={600} pl={"16px"}>
        Web types
      </Typography>
      <FormGroup>
        {webtype.map((text, index) => (
          <ListItem key={index}>
            <FormControlLabel control={<Checkbox />} label={text} />
          </ListItem>
        ))}
      </FormGroup>
      <List />
      <List>
        <Typography fontWeight={600} pl={"16px"}>
          Categories
        </Typography>
        {categories.map((item: any, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Image src={item.image} alt="Picture" width={25} height={25} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - 150px)` },
            ml: { sm: "150px" },
            backgroundColor: "#fff",
            boxShadow: "none",
          }}
        >
          <Box sx={{ backgroundColor: "#000624" }}>
            <Navbar />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, pl: "36px" }}
            >
              <CategoryIcon />
              <Typography variant="h6" sx={{ pl: "10px" }}>
                All Category
              </Typography>
            </IconButton>
          </Box>
          <Box sx={{ mt: "10px", pl:'10%' }}>
            <SearchBreadcrumb />
          </Box>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
        </Box>
      </Box>
      <Website />
      <MinFooter />
    </Box>
  );
}
