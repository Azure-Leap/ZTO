import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// type authContextType = {
//   user: boolean;
//   isSignIn:boolean;
//   message:String;
//   setUser?: any;
//   setIsSignIn?: any;
//   setMessage?: any;
// };

export const AuthContext = createContext({}) as any;
{
  /* <authContextType>({
  user: false,
  isSignIn:false,
  message:'',
}); */
}

export function AuthProvider({ children }: any): JSX.Element {
  const [user, setUser] = useState(null);
  const [isSignIn, setIsSignIn] = useState(false);
  const [message, setMessage] = useState("");
  const [changeUser, setChangeUser]=useState(false)
  useEffect(() => {
    const userParse = localStorage.getItem("user") || ""; //json string || undefined
    userParse && setUser(JSON.parse(userParse)); // to object
  }, [changeUser]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, isSignIn, setIsSignIn, message, setMessage, changeUser, setChangeUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
