import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { AuthContext } from '../../context/UserContext';
import { useRouter } from 'next/router';
import { CartContext } from '@/context/CartContext';

const pages = [{ title: 'About', link: "/NavAbout" }, { title: 'Pricing', link: '/pricing' }, { title: 'Help', link: '/help' }];
const settings = [ 'Dashboard',   'Logout'];
const webTypes = [{ name: 'All templates', link: "/All templates" }, { name: "Website", link: "/website" }, { name: "One page", link: "/one-page" }, { name: 'eStore', link: "/eStore" }]
function ResponsiveAppBar() {
  const history = useRouter();

  const {user, setIsSignIn, setUser}:any = useContext(AuthContext)
  const {cartItems}:any = useContext(CartContext);
  // console.log( cartItems, "-----------------")
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElTem, setAnchorElTem] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenTem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTem(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
   setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseTem = () => {
    setAnchorElTem(null);
  };
  const logOut = ()=>{
    setUser(null);
      localStorage.removeItem("user");
      history.push("/");
  }

 const handleLogout = (oper:any)=>{
     if(oper === "Logout"){
      logOut();
     }
 }
  
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <AppBar position="sticky" sx={{ textAlign: "center", backgroundColor: "transparent", color: "#000", backdropFilter:"blur(50px)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem 
              onClick={handleCloseNavMenu}
              >
                <Link href='/website-templates/All%20templates' >Products</Link>
              </MenuItem>

              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Link href={page.link}>{page.title}</Link>
                </MenuItem>

              ))}
            </Menu>

          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ZTO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <Tooltip title="Open product">
              <Button href='/website-templates/All%20templates' onClick={handleOpenTem} sx={{ my: 2, color: "#000", display: 'block', fontWeight: "600" }}>
                Products
              </Button>
            </Tooltip>
            {/* <Button  sx={{ my: 2, color: "#000", display: 'block', fontWeight: "600" }}>
            <Link href='/pricing' > 
                Pricing  
                 </Link>
              </Button> */}

            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElTem)}
              onClose={handleCloseTem}
            >
              {webTypes.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Link href={`/website-templates${(setting.link)}`}>
                    {setting.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu> */}
            {pages.map((page, idx) => (
              <Button
                key={idx}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#000", display: 'block', fontWeight: "600" }}
              >
                <Link href={page.link}>{page.title}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1.5, display: { xs: 'none', md: 'flex' }, }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/home"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                ZTO.MN
              </Typography>
              <Typography>Web building</Typography>

            </Box>

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!user?
            <Box>
              <Button sx={{ color: "#000", fontWeight: "600" }} onClick={()=>{
                console.log("SIGNIN");
                setIsSignIn(false)
              }}>
                 <IconButton href='/website-templates/cart' aria-label="cart" sx={{px:'20px'}} >
                    {cartItems?.length > 0 ? 
                      <StyledBadge badgeContent={cartItems.length} color="secondary">
                        <ShoppingCartIcon sx={{color:"#000"}}/>
                      </StyledBadge> : <ShoppingCartIcon sx={{color:"#000"}}/> }   
                  </IconButton>


                <Link href='/auth'> 
                  Login
               </Link>
              </Button>
              <Button variant="outlined" sx={{ fontWeight: "600" }} onClick={()=>{
                console.log("SIGNUP"); 
                setIsSignIn(true);
                }} >
                <Link href='/auth' >
                  Sign Up
                 </Link>
              </Button>
            </Box> :
            <Box>
                 <IconButton href='/website-templates/cart' aria-label="cart" sx={{px:'20px'}} >
                    {cartItems?.cartItem?.length > 0 ? 
                      <StyledBadge badgeContent={cartItems?.cartItem?.length} color="secondary">
                        <ShoppingCartIcon sx={{color:"#000"}}/>
                      </StyledBadge> : <ShoppingCartIcon sx={{color:"#000"}}/> }
   
                  </IconButton>

             
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.profileImg} sx={{color:"#000", backgroundColor:"transparent"}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Link href='/profile'>Profile</Link>

              </MenuItem>
              {settings.map((setting, idx) => (
                <MenuItem key={idx} onClick={()=> handleLogout(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;