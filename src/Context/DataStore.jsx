



import {  createContext, useState } from "react";

export const DataContext=createContext();


export const DataProvider=({children})=>{
    const [data,setData]=useState([])
    function SetData(data){
        setData(data)
    }
    return(
        <DataContext.Provider value={{data,SetData}}>
            {children}
        </DataContext.Provider>
    )
}

