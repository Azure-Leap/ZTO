import React, { useEffect, useState } from "react";
import { Grid, Box, Link, CircularProgress } from "@mui/material";
import Typography from "../editPage/onepirate/modules/components/Typography";
import { Button } from "@mui/material";
import axios from "axios";
import Search from "./Search";

const WebsiteTemlatesCard = ({ templates, isLoading,setTemplatesFilter, templatesFilter }:any) => {
  // console.log("templates", templates);
 const [webList, setWebList] = useState([...templates])

  const searchWeb = (e: any) => {
    console.log("fff", e.target.value);
    const filterWeb = templates.filter((web:any) => web.name?.toLowerCase().includes(e.target.value))
      setTemplatesFilter(filterWeb) ;
      // setTemplates(templatesFilter)
  }
  console.log('weblist',templates);
  return isLoading&&templates? (
    <>
      <Box>
        <Box>
          <Search searchWeb = {searchWeb}/>
        </Box>
        {!templatesFilter.length && <Box>Олдсонгүй</Box>}
       
      {templatesFilter.map((template:any, idx:any) => (
        <Grid key={idx}
          sx={{
            mb:"40px",
            background: "white",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            "&:hover": { scale: "1.06 ", overflowY: "hidden" },
          }}
        >
          <Box>
            <Box
              className="bounceTemplate"
              sx={{
                backgroundImage: `url(${template.image})`,
                backgroundRepeat: "no-repeat",
                width: "660px",
                height: "500px",
                backgroundPosition: "center 0",
                display: "block",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
              textAlign: "left",
            }}
          >
            <Typography variant="h6">{template?.name}</Typography>
            <Typography
              sx={{
                background: "gray",
                width: "80px",
                padding: "2px",
                opacity: "0.5",
                borderRadius: "5px",
              }}
            >
              {template.category?.title}
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Link
                href={template.demoLink}
                sx={{
                  border: "solid 2px black",
                  color: "Black",
                  width: "150px",
                  padding: "13px",
                  borderRadius: "0",
                }}
              >
                PREVIEW
              </Link>
              <Button
                sx={{
                  background: "gray",
                  border: "solid 2px gray",
                  color: "white",
                  width: "150px",
                  padding: "13px",
                  borderRadius: "0",
                }}
              >
                START
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
     
      </Box>
    </>
  ):<Box sx={{ display: 'flex' }}>
  <CircularProgress />
</Box>
};

export default WebsiteTemlatesCard;
