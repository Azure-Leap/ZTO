import React, { useEffect, useState } from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
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

  const filterCat = (id :string) => {
    const filterCat = templates.filter((tem:any) => tem?.category._id === id);
    
    setTemplatesFilter(filterCat);
  };

  return (
    <Grid
      sx={{
        position: "sticky",
        top: "0px",
        height: "80px",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        mt: "30px",
        width: "100%",
        zIndex: "11",
        backgroundColor: "transparent",
        backdropFilter: "saturate(100%) blur(80px)",
      }}
    >
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
    </Grid>
  );
};
export default CategoriesHead;
