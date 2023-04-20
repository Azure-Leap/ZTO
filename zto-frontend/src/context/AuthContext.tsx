import React, { createContext, useState } from 'react'


interface IUser{
  username: {type:String, required: true};
  email: {type:String, required: true};
  password: {type:String, required: true};
  role: {type:String, default: "User"};
  profileImg:{type: String}
}

const AuthContext = createContext<IUser | null>(null);

const AuthProvider = () => {
    const [user, setUser] = useState<IUser>({username: "Moon"})
  return (
    <AuthContext.Provider  value={{user, setUser}} >{children}</AuthContext.Provider>
  )
}

export default AuthProvider