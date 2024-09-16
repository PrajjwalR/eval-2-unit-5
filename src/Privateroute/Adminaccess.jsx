import React, { useEffect } from 'react'
import { LoginContext } from '../Context/Loginauth'
import { useNavigate } from 'react-router-dom'


export const Adminaccess = (props) => {
    let {Component}=props
    let {isLogin}=useContext(LoginContext)
    let navigate=useNavigate()
 useEffect(()=>{
    if(!isLogin){
navigate("/login")
    }
 })
  return (
    <Component/>
  )
}
