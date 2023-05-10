import axios from 'axios';
import React, { useState, createContext, useEffect  } from 'react'
import { DraggableData, DraggableEvent } from 'react-draggable';


type Position = {
  xRate: number;
  yRate: number;
};

export const EditContext = createContext({}) as any;

const EditProvider = ({children}:any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [componentName, setComponentName] = useState("");
  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: 150,
    yRate: 150
  });
  const [inputVal, setInputVal] = useState({
    title:{p:"Upgtade your sundays", color:"#FFF", size:"2rem", bold:"900"},
    text:{p:"Enjoy secret offers up to -70% off the best luxury hotels every Sunday.", color:"#FFF", size:"1rem", bold:"400"},
    button:{p:"REGISTER", color:"#FFF", size:"1rem", bold:"600"},
    p1:{p:"Discover the experience", color:"#FFF", size:"1rem", bold:"400"},
    valTit1:{p:"THE BEST LUXURY HOTELS", color:"#000", size:"1rem", bold:"600"},
    valText1:{p:"From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.", color:"#000", size:"1rem", bold:"400"},
    valTit2:{p:"NEW EXPERIENCES", color:"#000", size:"1rem", bold:"600"},
    valText2:{p:"Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.", color:"#000", size:"1rem", bold:"400"},
    valTit3:{p:"EXCLUSIVE RATES", color:"#000", size:"1rem", bold:"600"},
    valText3:{p:"By registering, you will access specially negotiated rates that you will not find anywhere else", color:"#000", size:"1rem", bold:"400"},
    catTit:{p:"For all tastes and all desires", color:"#000", size:"2rem", bold:"900"},
    workTit:{p:"How it works", color:"#000", size:"2rem", bold:"900"},
    workP1:{p:"Appointment every Wednesday 9am.", color:"#000", size:"1rem", bold:"400"},
    workP2:{p:"First come, first served. Our offers are in limited quantities, so be quick", color:"#000", size:"1rem", bold:"400"},
    workP3:{p:"New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.", color:"#000", size:"1rem", bold:"400"},
    offer:{p:"RECEIVE OFFERS", color:"#000", size:"2rem", bold:"600"},
    
    
  });
  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };

  const change = (e: any) => {
    console.log("===", ...inputVal);
    const newChangeVal = { ...inputVal  }
    newChangeVal[componentName] = {...newChangeVal[componentName], [e.target.name]: e.target.value};
    console.log(newChangeVal);
    setInputVal(newChangeVal);
  };

  return (
    <EditContext.Provider value={{inputVal, setInputVal, componentName, setComponentName, currentPosition, onDrag, isLoading, change }} >{children}</EditContext.Provider>
  )
}

export default EditProvider


{/* <Draggable
position={{
  x: currentPosition.xRate,
  y: currentPosition.yRate,
}}
onDrag={onDrag}
> 

  <Button  color="secondary"
variant="contained"
size="large"
sx={{ minWidth: 100 }} 
>
<div className="box" onClick={handleClick}>
  <TextField
  
    name="button"
    value={inputVal.button.p}
    variant="outlined"
    onChange={change}
    sx={{
      "& fieldset": { border: "none" },
      input: {
        textAlign: "center",
        color: inputVal.button.color,
        fontSize: inputVal.button.size,
        fontWeight: inputVal.button.bold,
      },
    }}
  />
  </div>
  </Button>
 </Draggable> */}