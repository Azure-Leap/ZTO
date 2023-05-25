import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Box,
  Link,
  CircularProgress,
  IconButton,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";
import Typography from "../../components/editPage/onepirate/modules/components/Typography";
import { Button } from "@mui/material";
import axios from "axios";
import Search from "./Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { AuthContext } from "@/context/UserContext";
import { CartContext } from "@/context/CartContext";

const WebsiteTemlatesCard = ({
  templates,
  isLoading,
  setTemplatesFilter,
  templatesFilter,
}: any) => {
  // console.log("templates", templates);
  const { user }: any = useContext(AuthContext);
  const { changeState, setChangeState, setAlert, alert, addCart }: any =
    useContext(CartContext);

  return isLoading && templates ? (
      <Box sx={{}}> 
        {!templatesFilter.length && <Box>Олдсонгүй</Box>}
        <Snackbar
        open={alert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
        onClose={() => {
          setAlert(false);
        }}
      >
        <Alert severity="error">Та эхлээд нэвтэрнэ үү!</Alert>
      </Snackbar>

       <Grid sx={{ display:"flex" ,gap:"50px", flexDirection:"row",flexWrap:"wrap", alignContent:"center", alignItems:"center"}}>
          {templatesFilter.map((template:any, idx:any) => (
        <Grid  key={idx} 
        className="WEB"
          sx={{
            mb:"40px",
            width: {lg:"55vh", xs:"100vh"},
            background: "white",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            "&:hover": { scale: "1.06 ", overflowY: "hidden" },
          }}
        >
          <Box
              className="bounceTemplate"
              sx={{
                zIndex: "2",
                backgroundImage: `url(${template.image})`,
                backgroundRepeat: "no-repeat",
                width: {lg:"55vh", xs:"100vh"},
                height: "500px",
                backgroundPosition: "center 0",
                display: "block",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  className="BAT"
                  sx={{
                    background: "gray",
                    width: "80px",
                    padding: "2px",
                    opacity: "0.5",
                    borderRadius: "5px",
                    textAlign: "center",
                  }}
                >
                  {template.category?.title}
                </Typography>
                <IconButton onClick={() => addCart(template, "inc")}>
                  {/* <IconButton onClick={()=> addCart(template._id, template.price)} > */}
                  <AddShoppingCartIcon
                    sx={{ color: "green", fontSize: "1.5rem" }}
                  />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", gap: "30px" }}>
                <Link
                  className="BUT"
                  href={template.demoLink}
                  sx={{
                    border: "solid 2px black",
                    color: "Black",
                    width: "80px",
                    padding: "13px",
                    borderRadius: "0",
                    textAlign: "center",
                  }}
                >
                  PREVIEW
                </Link>
                <Link
                  className="BUT"
                  href={template.editLink}
                  sx={{
                    background: "gray",
                    border: "solid 2px gray",
                    color: "white",
                    width: "150px",
                    padding: "13px",
                    borderRadius: "0",
                    textAlign: "center",
                  }}
                >
                  Edit
                </Link>
              </Box>
            </Box>
            <Box  sx={{ display: "flex", gap: "30px" }}>
              <Link
              className="BUT"
                href={template.demoLink}
                sx={{
                  border: "solid 2px black",
                  color: "Black",
                  width: "80px",
                  padding: "13px",
                  borderRadius: "0",
                  textAlign:"center"
                }}
              >
                PREVIEW
              </Link>
              <Link
              className="BUT"
              href={template.editLink}
                sx={{
                  background: "gray",
                  border: "solid 2px gray",
                  color: "white",
                  width: "150px",
                  padding: "13px",
                  borderRadius: "0",
                  textAlign:"center"
                }}
              >
                Edit
              </Link>
            </Box>
          </Grid>
        
      ))}
      </Grid>
      </Box>
  ) : <Box sx={{ display: 'flex', height:'100vh' }}>
  <CircularProgress /> 
</Box>

  
};

export default WebsiteTemlatesCard;
