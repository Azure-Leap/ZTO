import  React, {useContext, useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { TextField } from '@mui/material';
import axios from 'axios';
import { EditContext } from '../edit/editContext';
import Draggable from 'react-draggable';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));



export default function ProductCategories(handleClick, change) {
  const {currentPosition, onDrag, inputVal} = useContext(EditContext)
  const [cate, setCate]= useState([]);

const getCat = async()=>{
  try{
    const res = await axios('http://localhost:8008/categories');
    console.log("cate", res.data);
    setCate(res.data)
  }catch(err){
    console.log("ERROR", err);
  }
}
useEffect(()=>{
  getCat()
},[]);
 

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      {/* <Draggable position={{x:currentPosition.xRate, y:currentPosition.yRate}} onDrag={onDrag} > */}
      <Typography variant="h4" marked="center" align="center" component="h2">
      <TextField
                  name="catTit"
                  value={inputVal.catTit.p}
                  variant="outlined"
                  id="outlined-multiline-flexible"
                  fullWidth
                  rows={4}
                  // multiline
                  onClick={handleClick}
                  onChange={change}
                  sx={{
                    width: "600px",
                    "& fieldset": { border: "none" },
                    // "& .MuiInputBase-input": {
                    //   overflow: "hidden",
                    //   textOverflow: "ellipsis"
                    // },
                    input: {
                      textAlign: "center",
                      color: inputVal.catTit.color,
                      fontSize: inputVal.catTit.size,
                      fontWeight: inputVal.catTit.bold,
                    },
                  }}/>
      </Typography>
      {/* </Draggable> */}
      {/* <Draggable position={{x:currentPosition.xRate, y:currentPosition.yRate}} onDrag={onDrag} > */}

      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {cate.map((image):any => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.imgUrl})`,
              }}
            />
            
            <ImageBackdrop className="imageBackdrop" />
            <Box 
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
              
            >
            
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
      {/* </Draggable> */}

    </Container>
  );
}
