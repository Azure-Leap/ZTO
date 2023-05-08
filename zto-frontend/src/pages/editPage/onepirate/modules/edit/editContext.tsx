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
  const [inputVal, setInputVal] = useState({});
  const [componentName, setComponentName] = useState("");
  const [currentPosition, setCurrentPosition] = useState<Position>({
    xRate: 150,
    yRate: 150
  });

  const onDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ xRate: data.lastX, yRate: data.lastY });
  };

      const getHeaders=async()=>{
      const res = await axios("http://localhost:8008/headers");
      console.log("reshddvdv", res.data);
      setInputVal(res.data)
      setIsLoading(false);
      // setData(res.data)
    };


   useEffect(()=>{
      getHeaders()
    },[])
      // const change = (e: any) => {
      //   const newChangeVal = { ...inputVal  }
      //   newChangeVal[componentName] = {...newChangeVal[componentName], [e.target.name]: e.target.value};
      //   console.log(newChangeVal);
        
      //   setInputVal(newChangeVal);
      // };

  return (
    <EditContext.Provider value={{inputVal, setInputVal, componentName, setComponentName, currentPosition, onDrag, isLoading }} >{children}</EditContext.Provider>
  )
}

export default EditProvider