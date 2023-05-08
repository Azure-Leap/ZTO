import React, { useContext, useState, useEffect, createContext } from "react";
import { styled } from "@mui/material/styles";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Popper,
  Select,
} from "@mui/material";
import TemplateHome from "../../TemplateHome";
import { color } from "framer-motion";
import { EditContext } from "./editContext";
import ProductHero from "../pages/ProductHero";

const colors = [
  { name: "white", code: "#fff" },
  { name: "black", code: "#000" },
  { name: "orange", code: "#ff8400" },
  { name: "blue", code: "#42a5f5" },
  { name: "purple", code: "#9c27b0" },
  { name: "red", code: "#f44336" },
];

const fontSizes = [
  { number: "16", code: "1rem" },
  { number: "32", code: "2rem" },
  { number: "48", code: "3rem" },
  { number: "52", code: "4rem" },
];


export default function EditForm() {
  // const [formats, setFormats] = useState([]);
  const { setComponentName, componentName, inputVal, setInputVal } = useContext(EditContext);

  const change = (e: any) => {
    const newChangeVal = { ...inputVal  }
    newChangeVal[componentName] = {...newChangeVal[componentName], [e.target.name]: e.target.value};
    console.log(newChangeVal);
    setInputVal(newChangeVal);
  };

  // const handleFormat = (e: any, newValue: any) => {
  //   setFormats([e.target.name]:newValue);
  //   console.log("val", newValue);
  // };

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log("==", event.target.name);
    const name = event.target.name;
    setComponentName(name);
    console.log(name);
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <Box>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="top"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Box
              sx={{
                my: "10px",
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              <ToggleButtonGroup
                // value={formats}
                // onChange={}
                // aria-label="text formatting"
                sx={{ height: "50px" }}
              >
                <ToggleButton value="bold" name="bold" aria-label="bold" >
                <FormatBoldIcon/>
                <Select
                    sx={{ "& fieldset": { border: "none" } }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="bold"
                    label="bold"
                    onChange={change}
                  >
                    {[800, 600, 500, 400].map((bold, idx) => (
                      <MenuItem key={idx} value={bold}> 
                        {bold}
                      </MenuItem>
                    ))}
                  </Select>
                </ToggleButton>
               
                <ToggleButton value="color" aria-label="color">
                  <FormatColorFillIcon
                          id="demo-simple-select-label"
                        />

                  <Select
                    sx={{ "& fieldset": { border: "none" } }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="color"
                    label="Color"
                    onChange={change}
                  >
                    {colors.map((color, idx) => (
                      <MenuItem key={idx} value={color.code} >
                        {color.name}
                      </MenuItem>
                    ))}
                  </Select>
                </ToggleButton>
                <ToggleButton
                  value="size"
                  aria-label="left aligned"
                  id="demo-simple-select-label"
                >
                  Size
                  <Select
                    sx={{ "& fieldset": { border: "none" } }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="size"
                    label="size"
                    onChange={change}
                  >
                    {fontSizes.map((size, idx) => (
                      <MenuItem key={idx} value={size.code}>
                        {size.number}
                      </MenuItem>
                    ))}
                  </Select>
                </ToggleButton>
                <ToggleButton value="delete" aria-label="delete">
                  <DeleteIcon />
                </ToggleButton>
              </ToggleButtonGroup>
              <Button variant="contained" sx={{ height: "50px" }}>
                Save
              </Button>
            </Box>
          </Fade>
        )}
      </Popper>
      {/* <ProductHero handleClick={handleClick} /> */}
      <TemplateHome handleClick={handleClick} change={change} />
      {/* <ProductHero formats={formats} inputVal={inputVal} change={change} handleClick={handleClick} /> */}
    </Box>
  );
}

// const a = {
//   p1: {
//     name: "Naraa",
//   size: 21
//   }
// }
// const k = 'p1';
// a[k].name
