import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Popper,
  Select,
} from "@mui/material";
import TemplateHome from "../../TemplateHome";


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

// const template = [
//   {
//     page1: {
//       header: {
//         title: "Upgrade your Sundays",
//         titleColor: "#000",
//         titleSze: "1rem",
//       },
//       text: {
//         p: "Enjoy secret offers up to -70% off the best luxury hotels every Sunday.",
//         textColor: "#000",
//         textSize: "1rem",
//       },
//     },
//   },
// ];

export default function EditForm() {
  const [formats, setFormats] = React.useState([]);
  const [changeName, setChangeName] = useState()

  const [inputVal, setInputVal] = useState({
    text: "Enjoy secret offers up to -70% off the best luxury hotels every Sunday.",
    btn: "Register",
    btnSize: "2rem",
    btnColor: "#fff",
    title: "Upgrade your Sundays",
    titleSize: "2.5rem",
    titleColor: "",
    textSize: "1rem",
    textColor: "#fff",
    
  });

  const change = (e: any) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  const handleFormat = (e: any, newValue: any) => {
    setFormats(newValue);
   
    console.log('val',newValue);
  };

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // console.log('==', event.target.name);
    setChangeName(event.target.name)
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <Box>
      {changeName &&
      <Popper  id={id} open={open} anchorEl={anchorEl} transition sx={{ position:'absolute'}}>
        <Box sx={{ my: "10px", display: "flex", backgroundColor:"#fff", borderRadius:'10px' }}>
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            sx={{ height: "50px" }}
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color">
              <FormatColorFillIcon id="demo-simple-select-label" />
              <Select
                sx={{ "& fieldset": { border: "none" } }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="titleColor"
                // name={{changeName}+"Color"}
                // value={inputVal.titleColor}
                label="Color"
                onChange={change}
              >
                {colors.map((color, idx) => (
                  <MenuItem key={idx} value={color.code}>
                    {color.name}
                  </MenuItem>
                ))}
              </Select>
            </ToggleButton>
            <ToggleButton
              value="left"
              aria-label="left aligned"
              id="demo-simple-select-label"
            >
              Size
              <Select
                sx={{ "& fieldset": { border: "none" } }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="titleSize"
                // value={inputVal[comp].size}
                label="Color"
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
      </Popper>}

      <TemplateHome
        formats={formats}
        inputVal={inputVal}
        change={change}
        handleClick={handleClick}
      />
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