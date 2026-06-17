import { useState,createContext, useContext } from "react";

export const AuthnContext =createContext({
    user:{
        name:"Hafsa",isLoggedIn:true
    },
    setUser:()=>{}
});

export const AuthnProvider = ({children})=>{
    const [user,setUser]=useState({
        name:"Hafsa",
        isLoggedIn:true
    });
    return(
        <AuthnContext.Provider value={{user,setUser}} >
            {children}
        </AuthnContext.Provider>
    );
};

export const useAuthnContext = ()=>{
    return useContext(AuthnContext);
};
