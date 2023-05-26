import React, { useEffect, useState } from "react";
import { Grid, Box, Button, Typography, Container } from "@mui/material";
// import Button from '../editPage/onepirate/modules/components/Button'
import Search from "./Search";
import axios from "axios";
import { BASE_API_URL } from "@/utils/variables";

const CategoriesHead = ({ setTemplatesFilter, templates }: any) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {});
  }, []);

  const searchWeb = (e: any) => {
    const filterWeb = templates.filter((web: any) =>
      web.name?.toLowerCase().includes(e.target.value)
    );
    setTemplatesFilter(filterWeb);
    // setTemplates(templatesFilter)
  };

  const filterCat = (id: string) => {
    const filterCat = templates.filter((tem: any) => tem?.category._id === id);
    setTemplatesFilter(filterCat);
  };

  return (
    <Grid
      sx={{
        position: "sticky",
        top: {lg:"65px", xs:"60px"},
        height: "100px",
        alignItems: "center",
        flexDirection: {lg:"row", xs:"column"},
        justifyContent: "space-around",
        mt: "30px",
        zIndex: "11",
        backgroundColor: "transparent",
        backdropFilter: "saturate(100%) blur(80px)",
        display:"flex",
      }}
    >
      <Box sx={{  width:{lg:"100%", xs:"100vh"}
, }}>   
      <Button
          sx={{
            height: "20px",
            backgroundColor: "none",
            color: "black",
           fontSize: {lg:"17px", xs:"10px"},
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
     
        {categories.map((category: any, idx) => (
          <Button
            key={idx}
            sx={{
              height: "20px",
              backgroundColor: "none",
              color: "black",
              fontSize: {lg:"17px", xs:"10px"},
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
            height: "70px",
            width:{lg:"50%", xs:"100vh"},
            backgroundColor: "none",
            alignContent:"center",
            alignItems:"center",
            color: "black",
            fontSize: "17px",
          }}>
          <Search searchWeb = {searchWeb}/>
        </Box>
     
    </Grid>
  );
};
export default CategoriesHead;
