import { useState,createContext,useContext, Children } from "react";

export const productContext = createContext();

export const productProvider=({children})=>{
    const [productItem,setProductItem]=useState([
        {id:1,name:'School Bag',price:'2000'},
        {id:2,name:'Water Bottle',price:'1000'}
    ]);
    return(
        <productContext.Provider value={{productItem,setProductItem}}>
            {children}
        </productContext.Provider>
    );
};
export const useProductContext=()=>{
    return useContext(productContext);
};