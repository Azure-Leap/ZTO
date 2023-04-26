import React, { ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

type authContextType = {
  user: boolean;
  isSignIn:boolean;
  message:String;
  setUser?: any;
  setIsSignIn?: any;
  setMessage?: any;
};

export const AuthContext = createContext<authContextType>({
  user: false,
  isSignIn:false,
  message:'',
});


export function AuthProvider({ children }:any):JSX.Element {
  const [user, setUser] = useState<boolean>(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [message, setMessage] = useState('');

   
  return (<AuthContext.Provider value={{user, setUser, isSignIn, setIsSignIn,message, setMessage}}>

      {children}
    </AuthContext.Provider>
    
  );
}

