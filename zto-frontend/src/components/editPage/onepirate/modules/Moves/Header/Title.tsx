import React from 'react'
import Draggable from 'react-draggable';
import { EditContext } from "../../edit/editContext";
import { Typography } from '@mui/material';
import {TextField} from '@mui/material';

export default function Title({ handleClick, change }: any) {
    const { inputVal }: any = React.useContext(EditContext);
    
  return (
    <div>
        <Draggable>
        <div onClick={handleClick}>
         
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
         </Typography>
</Draggable>
    </div>
  )
}

