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
  
  // const getHeaders=async()=>{
  //   const res = await axios("http://localhost:8008/headers");
  //   console.log("res", res.data);
  // };


  // React.useEffect(()=>{
  //   getHeaders()
  // },[])


  return (

      <React.Fragment>
        <Box>
          {/* <AppAppBar /> */}
          <ProductHero handleClick={handleClick}  change={change}/>
          <ProductValues handleClick={handleClick}  change={change} />
          <ProductCategories />
          <ProductHowItWorks />
          <ProductCTA />
          <ProductSmokingHero />
          <AppFooter />
        </Box>
      </React.Fragment>

  );
}

// export async function getServerSideProps() {
//   const res = await axios("http://localhost:8008/headers");
//   console.log("res", res);
//   // const data = await res.json();
//   return {
//     props: {
//      res
//     },
//   };}

export default withRoot(Index);
