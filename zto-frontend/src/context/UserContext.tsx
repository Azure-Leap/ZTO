
import React, { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

// type authContextType = {
//   user: boolean;
//   isSignIn:boolean;
//   message:String;
//   setUser?: any;
//   setIsSignIn?: any;
//   setMessage?: any;
// };

export const AuthContext =  createContext({}) as any
{/* <authContextType>({
  user: false,
  isSignIn:false,
  message:'',
}); */}


export function AuthProvider({ children }:any):JSX.Element {
  const [user, setUser] = useState(null);
  const [isSignIn, setIsSignIn] = useState(false);
  const [message, setMessage] = useState('');

  

  useEffect(()=>{
    const s = localStorage.getItem("user");
  
    setUser(JSON.parse(s));
  },[]);

   
  return (<AuthContext.Provider value={{user, setUser, isSignIn, setIsSignIn,message, setMessage}}>

      {children}
    </AuthContext.Provider>
    
  );
}

