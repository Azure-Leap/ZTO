import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Box, TextField } from "@mui/material";
import { EditContext } from "../edit/editContext";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

export default function ProductHero({ handleClick , change}:any) {
  const {inputVal }= React.useContext(EditContext)

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
      <Typography color="inherit" align="center" variant="h2" marked="center">
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
      </Typography>
      </div>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        <TextField
          name="text"
          value={inputVal.text.p}
          variant="outlined"
          onClick={handleClick}
          onChange={change}
          sx={{
            width:"800px",
            "& fieldset": { border: "none" },
            input: {
              textAlign: "center",
              color: inputVal.text.color,
              fontSize: inputVal.text.size,
              fontWeight: inputVal.text.bold,
            },
          }}
        />
      </Typography>
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
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
      <TextField
          name="p1"
          value={inputVal.p1.p}
          variant="outlined"
          onClick={handleClick}
          onChange={change}
          sx={{
            width:"400px",
            "& fieldset": { border: "none" },
            input: {

              textAlign: "center",
              color: inputVal.p1.color,
              fontSize: inputVal.p1.size,
              fontWeight: inputVal.p1.bold,
            },
          }}
        />
      </Typography>
    </ProductHeroLayout>
    </Box>
  );
}
