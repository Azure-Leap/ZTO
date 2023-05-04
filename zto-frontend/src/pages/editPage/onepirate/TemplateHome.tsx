import * as React from 'react';
import ProductCategories from './modules/pages/ProductCategories';
import ProductSmokingHero from './modules/pages/ProductSmokingHero';
import AppFooter from './modules/pages/AppFooter';
import ProductHero from './modules/pages/ProductHero';
import ProductValues from './modules/pages/ProductValues';
import ProductHowItWorks from './modules/pages/ProductHowItWorks';
import ProductCTA from './modules/pages/ProductCTA';
import AppAppBar from './modules/pages/AppAppBar';
import withRoot from './modules/withRoot';
import { Box } from '@mui/material';



function Index({formats,
  inputVal,
  change,
  handleClick}:any) {
  return (
    <React.Fragment>
      <Box>
          {/* <AppAppBar /> */}
          <ProductHero formats={formats}
        inputVal={inputVal}
        change={change}
        handleClick={handleClick} />
          <ProductValues />
          <ProductCategories  formats={formats}
        inputVal={inputVal}
        change={change}
        handleClick={handleClick}/>
          <ProductHowItWorks />
          <ProductCTA />
          <ProductSmokingHero />
          <AppFooter />
        
          </Box>
      </React.Fragment>
  );
}

export default withRoot(Index);
