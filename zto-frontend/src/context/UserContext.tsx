import React, { ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

type authContextType = {
  user: boolean;
  isSignIn:boolean;
  login: () => void;
  logout: () => void;
 
  setUser?: SetStateAction<any>
  setIsSignIn?: SetStateAction<any>
};

const authContextDefaultValues: authContextType = {
  user: false,
  isSignIn:false,
  setIsSignIn: ()=>{},
  setUser:()=>{},
  login: () => {},
  logout: () => {},
  
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

// export function useAuth() {
//   return useContext(AuthContext)
// }
type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: any):any {
  const [user, setUser] = useState<boolean>(false);
  const [isSignIn, setIsSignIn] = useState<boolean>(false);

    const login = () => {
        setUser(true);
    };

    const logout = () => {
        setUser(false);
    };

   

    const value = {
        user,
        isSignIn,
        login,
        logout,
        setUser,    
       setIsSignIn
    };
  return (
      <>
          <AuthContext.Provider value={value}>
              {children}
          </AuthContext.Provider>
      </>
  );
}

