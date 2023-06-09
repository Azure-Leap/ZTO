import React, { useEffect, useRef } from 'react';
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Box, TextField } from "@mui/material";
import { EditContext } from "../edit/editContext";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function ProductHero({ handleClick, change }: any) {
  const { inputVal }: any = React.useContext(EditContext);


  return (
    <Box id="productHero">
      <ProductHeroLayout
        sxBackground={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: "#7fc7d9", // Average color of the background image.
          backgroundPosition: "center",
        }}
      >
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: "none" }}
          src={backgroundImage}
          alt="increase priority"
        />

        <div onClick={handleClick}>
         
            <TextField
              name="title"
              value={inputVal.title.p}
              variant="outlined"
              onChange={change}
              sx={{
                "& fieldset": { border: "none" },
                input: {
                  textAlign: "center",
                  color: inputVal.title.color,
                  fontSize: inputVal.title.size,
                  fontWeight: inputVal.title.bold,
                },
              }}
            />
     
        </div>
       
          <TextField
            name="text"
            value={inputVal.text.p}
            variant="outlined"
            onClick={handleClick}
            onChange={change}
            sx={{
              width: "800px",
              "& fieldset": { border: "none" },
              input: {
                textAlign: "center",
                color: inputVal.text.color,
                fontSize: inputVal.text.size,
                fontWeight: inputVal.text.bold,
              },
            }}
          />
        <Button
          color="secondary"
          variant="contained"
          size="large"
          component="a"
          // href="/premium-themes/onepirate/sign-up/"
          sx={{ minWidth: 200 }}
        >
          <TextField
            name="button"
            value={inputVal.button.p}
            variant="outlined"
            onClick={handleClick}
            onChange={change}
            sx={{
              // width:"800px",
              "& fieldset": { border: "none" },
              input: {
                textAlign: "center",
                color: inputVal.button.color,
                fontSize: inputVal.button.size,
                fontWeight: inputVal.button.bold,
              },
            }}
          />
        </Button>
          <TextField
            name="p1"
            value={inputVal.p1.p}
            variant="outlined"
            onClick={handleClick}
            onChange={change}
            sx={{
              width: "400px",
              "& fieldset": { border: "none" },
              input: {
                textAlign: "center",
                color: inputVal.p1.color,
                fontSize: inputVal.p1.size,
                fontWeight: inputVal.p1.bold,
              },
            }}
          />
      </ProductHeroLayout>
    </Box>
  );
}
