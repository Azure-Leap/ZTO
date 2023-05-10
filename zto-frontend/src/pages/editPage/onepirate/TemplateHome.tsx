import * as React from "react";
import ProductCategories from "./modules/pages/ProductCategories";
import ProductSmokingHero from "./modules/pages/ProductSmokingHero";
import AppFooter from "./modules/pages/AppFooter";
import ProductHero from "./modules/pages/ProductHero";
import ProductValues from "./modules/pages/ProductValues";
import ProductHowItWorks from "./modules/pages/ProductHowItWorks";
import ProductCTA from "./modules/pages/ProductCTA";
import AppAppBar from "./modules/pages/AppAppBar";
import withRoot from "./modules/withRoot";
import { Box } from "@mui/material";
import EditForm from "./modules/edit/editForm";

function Index({handleClick, change}:any) {
  

  return (

      <React.Fragment>
        <Box>
          <AppAppBar />
          <ProductHero handleClick={handleClick} change={change} />
          <ProductValues handleClick={handleClick} change={change}/>
          <ProductCategories handleClick={handleClick} change={change}/>
          <ProductHowItWorks handleClick={handleClick} change={change}/>
          <ProductCTA handleClick={handleClick} change={change}/>
          <ProductSmokingHero handleClick={handleClick} change={change}/>
          <AppFooter />
        </Box>
      </React.Fragment>

  );
}



export default withRoot(Index);
