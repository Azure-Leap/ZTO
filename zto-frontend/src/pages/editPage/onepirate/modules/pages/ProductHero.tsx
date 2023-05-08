import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import ProductHeroLayout from "./ProductHeroLayout";
import Typography from "../components/Typography";
import Button from "../components/Button";
import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  makeStyles,
} from "@mui/material";
import { EditContext } from "../edit/editContext";
import axios from "axios";

const backgroundImage =
  "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400";

const ProductHero = ({ handleClick, change }: any) => {
  
  const { inputVal, setInputVal, currentPosition, onDrag, isLoading } =
    useContext(EditContext);

  //   const getHeaders=async()=>{
  //     const res = await axios("http://localhost:8008/headers");
  //     console.log("resh", res.data);
  //     setInputVal(res.data)
  //     // setData(res.data)
  //   };

  //  useEffect(()=>{
  //     getHeaders()
  //   },[])

  return !isLoading?(
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <div>
        <Draggable
          position={{
            x: currentPosition.xRate,
            y: currentPosition.yRate,
          }}
          onDrag={onDrag}
        >
          <div
            className="box"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <TextField
              name="title"
              value={inputVal[0].title}
              variant="outlined"
              onChange={change}
              sx={{
                height: "200px",
                width: "100%",
                "& fieldset": { border: "none" },
                // fontStyle: formats.includes("italic") ? "italic" : "normal",
                input: {
                  textAlign: "center",
                  color: inputVal[0].color,
                  fontSize: inputVal[0].size,
                  fontWeight: inputVal[0].bold,
                },
              }}
            />
          </div>
        </Draggable>
        {/* <Draggable
          position={{
            x: currentPosition.xRate,
            y: currentPosition.yRate,
          }}
          onDrag={onDrag}
        > */}
          <div
            className="box"
            onClick={(e) => {
              // console.log("Click",e.target.name);
              handleClick(e);
            }}
          >
            <TextField
              name="p1"
              // value={inputVal.p1.text}
              variant="outlined"
              onChange={change}
              sx={{
                height: "200px",
                width: "100%",
                "& fieldset": { border: "none" },
                input: {
                  textAlign: "center",
                  // color: inputVal.p1.color,
                  // fontSize: inputVal.p1.size,
                  // fontWeight: inputVal.p1.bold,
                },
              }}
            />
          </div>
        {/* </Draggable> */}
        {/* <Draggable
          position={{
            x: currentPosition.xRate,
            y: currentPosition.yRate,
          }}
          onDrag={onDrag}
        > */}
 
            {/* <Button  color="secondary"
        variant="contained"
        size="large"
        sx={{ minWidth: 100 }} 
        onClick = {handleClick} > */}
         <div className="box" onClick={handleClick}>
            <TextField
            
              name="button"
              // value={inputVal.button.title}
              variant="outlined"
              onChange={change}
              sx={{
                "& fieldset": { border: "none" },
                input: {
                  textAlign: "center",
                  // color: inputVal.button.color,
                  // fontSize: inputVal.button.size,
                  // fontWeight: inputVal.button.bold,
                },
              }}
            />
            </div>
            {/* </Button> */}
        {/* </Draggable> */}
        {/* <Draggable
          position={{
            x: currentPosition.xRate,
            y: currentPosition.yRate,
          }}
          onDrag={onDrag}
        > */}
          <div className="box" onClick={handleClick}>
            <TextField
              name="p2"
              // value={inputVal.p2.text}
              variant="outlined"
              onChange={change}
              sx={{
                height: "200px",
                width: "100%",
                "& fieldset": { border: "none" },
                input: {
                  // textAlign: "center",
                  // color: inputVal.p2.color,
                  // fontSize: inputVal.p2.size,
                  // fontWeight: inputVal.p2.bold,
                },
              }}
            />
          </div>
        {/* </Draggable> */}
      </div>
    </ProductHeroLayout>
  ):<h1>Loading...</h1>;
};

export default ProductHero;
