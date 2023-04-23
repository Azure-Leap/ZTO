import React, { ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

type authContextType = {
  user: boolean;
 
  login: () => void;
  logout: () => void;
 
  setUser?: SetStateAction<any>
};

const authContextDefaultValues: authContextType = {
  user: false,
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
  // const [isSignIn, setIsSignIn] = useState<boolean>(false);

    const login = () => {
        setUser(true);
    };

    const logout = () => {
        setUser(false);
    };

   

    const value = {
        user,
        login,
        logout,
        setUser
       
    };
  return (
      <>
          <AuthContext.Provider value={value}>
              {children}
          </AuthContext.Provider>
      </>
  );
}

