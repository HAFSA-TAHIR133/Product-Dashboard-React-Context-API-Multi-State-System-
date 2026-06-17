import { Children, createContext,useContext,useState } from "react";

export const newProductCountContext = createContext();

export const newProductCountProvider = ({children})=>{
    const [newProductCount,setNewProductCount]= useState(0);

    return(
        <newProductCountContext.Provider value={{newProductCount,setNewProductCount}}>
            {children}
        </newProductCountContext.Provider>
    );
};

export const useNewProductCountContext =()=>{
    return useContext(newProductCountContext);
};