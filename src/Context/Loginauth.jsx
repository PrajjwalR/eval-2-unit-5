import { createContext, useState } from "react";


export const LoginContext=createContext();

export const LoginProvider=({children})=>{
    let [isLogin,setIsLogin]=useState(false);

    function SetLogin(isLogin){
        setIsLogin(isLogin)
    }

    return(
        <LoginContext.Provider value={{isLogin,SetLogin}}>
            {children}
        </LoginContext.Provider>
    )

}