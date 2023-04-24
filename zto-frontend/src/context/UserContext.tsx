import React, { ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

type authContextType = {
  user: boolean;
  isSignIn:boolean;
  setUser?: any
  setIsSignIn?: any
};

export const AuthContext = createContext<authContextType>({
  user: false,
  isSignIn:false,
});


export function AuthProvider({ children }:any):JSX.Element {
  const [user, setUser] = useState<boolean>(false);
  const [isSignIn, setIsSignIn] = useState(true);
   
  return (<AuthContext.Provider value={{user, setUser, isSignIn, setIsSignIn}}>
    {console.log("SS",isSignIn)}
      {children}
    </AuthContext.Provider>
    
  );
}

