import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import ProductHeroLayout from "./ProductHeroLayout";
import Typography from "../components/Typography";
import Button from "../components/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import axios from "axios";
import { TextField } from "@mui/material";
import { EditContext } from "../edit/editContext";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

interface AppState {
  activeDrags: number;
  deltaPosition: {
    x: number;
    y: number;
  };
  controlledPosition: {
    x: number;
    y: number;
  };
}
const ProductValues = ({ change, handleClick }: any) => {
  const [data, setData] = useState([]);
  const { inputVal } = useContext(EditContext);

  const getAbouts = async () => {
    const res = await axios("http://localhost:8008/abouts");
    console.log("ab", res.data);
    setData(res.data);
  };

  useEffect(() => {
    getAbouts();
  }, []);

//   return (
//     <div>
//       <Box
//         component="section"
//         sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
//       >
//         <Container
//           sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
//         >
//           <Grid container spacing={5}>
//             {data.map((e, idx) => (
//               <Grid item xs={12} md={4}>
//                 <Box sx={item}>
//                   {/* <Draggable onDrag={handleDrag} {...dragHandlers}> */}
//                   <div className="box">
//                     <Box
//                       component="img"
//                       src={e.icon}
//                       alt="suitcase"
//                       sx={{ height: 55 }}
//                     />
//                     <Box onClick={handleClick}>
//                       <TextField
//                         name="valtit"
//                         value={inputVal.valtit.tit}
//                         onChange={change}
//                         sx={{
//                           height: "200px",
//                           width: "100%",
//                           "& fieldset": { border: "none" },
//                           input: {
//                             textAlign: "center",
//                             color: inputVal.valtit.color,
//                             fontSize: inputVal.valtit.size,
//                           },
//                         }}
//                       />
//                     </Box>

//                     <Box
//                       component="form"
//                       sx={{
//                         "& .MuiTextField-root": { m: 1, width: "25ch" },
//                       }}
//                       noValidate
//                       autoComplete="off"
//                       onClick={handleClick}
//                     >
//                       <TextField
//                         id="ooutlined-textarea"
//                         multiline
//                         rows={4}
//                         name="valtext"
//                         value={inputVal.valtext.text}
//                         onChange={change}
//                         sx={{
//                           "& fieldset": { border: "none" },
//                           input: {
//                             textAlign: "center",
//                             color: inputVal.valtext.color,
//                             fontSize: inputVal.valtext.size,
//                           },
//                         }}
//                       />
//                     </Box>
//                   </div>
//                   {/* </Draggable> */}
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </div>
//   );
 };

export default ProductValues;
