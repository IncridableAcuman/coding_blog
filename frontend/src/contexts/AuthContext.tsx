import type IAuth from "@/interfaces/auth.interface";
import type IUser from "@/interfaces/user.interface";
import React, { createContext, useContext, useState } from "react";

const AuthContext=createContext<IAuth | undefined>(undefined);

export const AuthProvider=({children}:{children:React.ReactNode})=>{
    const [user,setUser]=useState<IUser | null>(null);
    const [accessToken,setAccessToken]=useState<string | null>(null);

    const login=(user:IUser,token:string)=>{
        setUser(user);
        setAccessToken(token);
        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("accessToken",token);
    }

    const logout=()=>{
        setUser(null);
        setAccessToken(null);
        localStorage.removeItem("accessToken");
    }

    return (
    <AuthContext.Provider value={{user,accessToken,login,logout}}>
        {children}
    </AuthContext.Provider>
);
}

export const UseAuth = () => {
    const context=useContext(AuthContext);
    if(!context) throw new Error("AuthContext is not used in Provider");
    return context;
}