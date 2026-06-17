import { useState,createContext, useContext } from "react";

export const activityContext =createContext();

export const activityProvider = ({children})=>{
    const [activityCount,setActivityCount]=useState(0);
    return(
        <activityContext.Provider value={{activityCount,setActivityCount}} >
            {children}
        </activityContext.Provider>
    );
};

export const useActivityContext = ()=>{
    return useContext(activityContext);
};
