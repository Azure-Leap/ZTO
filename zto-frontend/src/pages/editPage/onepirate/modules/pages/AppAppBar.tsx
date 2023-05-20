import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Onepirate from '../Moves/Navbar/Onepirate';

import Singin from '..//Moves/Navbar/Singin';
import Singup from '../Moves/Navbar/Signup';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
        <Toolbar sx={{ justifyContent: 'space-between' , backgroundColor:"#28282a" }}>
          <Box sx={{ flex: 1 }} />
         
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24 }}
          >
         <Onepirate/>
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
          <Singin/>
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              <Singup/>
            </Link>
          </Box>
        </Toolbar>
    </div>
  );
}

export default AppAppBar;
