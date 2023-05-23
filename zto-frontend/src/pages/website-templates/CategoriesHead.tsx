import React, { useEffect, useState } from "react";
import { Grid, Box, Button, Typography, Container } from "@mui/material";
// import Button from '../editPage/onepirate/modules/components/Button'
import Search from "./Search";
import axios from "axios";

const CategoriesHead = ({ setTemplatesFilter, templates }:any) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9010/categories")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
      })
      .catch((err) => {});
  }, []);

  const searchWeb = (e: any) => {
    console.log("fff", e.target.value);
    const filterWeb = templates.filter((web:any) => web.name?.toLowerCase().includes(e.target.value))
      setTemplatesFilter(filterWeb) ;
      // setTemplates(templatesFilter)
  }

  const filterCat = (id :string) => {
    const filterCat = templates.filter((tem:any) => tem?.category._id === id);
    
    setTemplatesFilter(filterCat);
  };

  return (
    
    <Grid
      sx={{
        position: "sticky",
        top: "65px",
        height: "80px",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        mt: "30px",
        width:  "100%",
        zIndex: "11",
        backgroundColor: "transparent",
        backdropFilter: "saturate(100%) blur(80px)",
        display:"flex"
      }}
    >
      <Box sx={{marginLeft:"5%"}}>   
      <Button
          sx={{
            height: "20px",
            backgroundColor: "none",
            color: "black",
            fontSize: "17px",
            "&:hover": {
              border: "solid 1px",
              borderRadius: "0",
              height: "40px",
            },
          }}
          onClick={()=>setTemplatesFilter(templates)}
        >
         All
        </Button>
      {categories.map((category :any , idx) => (
        <Button
          key={idx}
          sx={{
            height: "20px",
            backgroundColor: "none",
            color: "black",
            fontSize: "17px",
            "&:hover": {
              border: "solid 1px",
              borderRadius: "0",
              height: "40px",
            },
          }}
          onClick={() => filterCat(category._id)}
        >
          {category.title}
        </Button>
      ))}
      </Box>
      <Box   sx={{
            height: "50px",
            
            width:"400px",
            backgroundColor: "none",
            color: "black",
            fontSize: "17px",
          }}>
          <Search searchWeb = {searchWeb}/>
        </Box>
     
    </Grid>
  );
};
export default CategoriesHead;
