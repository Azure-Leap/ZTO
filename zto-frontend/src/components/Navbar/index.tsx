import * as React from 'react';
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
import { AuthContext } from '@/context/UserContext';

const pages = [{ title: 'About', link: "/about" }, { title: 'Pricing', link: '/pricing' }, { title: 'Help', link: '/help' }];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const webTypes = [{ name: 'All templates', link: "/All templates" }, { name: "Website", link: "/website" }, { name: "One page", link: "/one-page" }, { name: 'eStore', link: "/eStore" }]
function ResponsiveAppBar() {
  const {user, setIsSignIn}= React.useContext(AuthContext)
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <AppBar position="static" sx={{ textAlign: "center", backgroundColor: "#fff", color: "#000" }}>
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Products</Typography>
              </MenuItem>

              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}>
                  <Link href={page.link}>{page.title}</Link>
                  {/* <Link textAlign="center">{page}</Link> */}
                </MenuItem>

              ))}
            </Menu>

          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' } }} /> */}
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
            <Tooltip title="Open settings">
              <Button onClick={handleOpenUserMenu} sx={{ my: 2, color: "#000", display: 'block', fontWeight: "600" }}>
                Products
              </Button>
            </Tooltip>
            {/* <Button  sx={{ my: 2, color: "#000", display: 'block', fontWeight: "600" }}>
            <Link href='/pricing' > 
                Pricing  
                 </Link>
              </Button> */}

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
              {webTypes.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Link href={`/website-templates${(setting.link)}`}>
                    {setting.name}
                  </Link>
                  {/* <Link href={setting.link} underline="none" textAlign="center">{setting.name}</Link> */}
                </MenuItem>
              ))}
            </Menu>
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
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',

                }}
              >
                ZTO.MN
              </Typography>
              <Typography>web building</Typography>

            </Box>

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {!user?
            <Box>
              <Button sx={{ color: "#000", fontWeight: "600" }} onClick={()=>setIsSignIn(true)}>

                <Link href='/login'>
                  Login
                </Link>
              </Button>
              <Button variant="outlined" sx={{ fontWeight: "600" }} onClick={()=>setIsSignIn(false)}>
                <Link href='/login' >
                  Sign Up
                </Link>
              </Button>
            </Box> :
            <Box>
           <IconButton aria-label="cart" sx={{px:'20px'}} >
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon/>
              </StyledBadge>
            </IconButton>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
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