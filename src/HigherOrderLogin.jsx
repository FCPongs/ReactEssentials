import React from 'react'

import  { useState } from 'react'
import { LoginContext } from './Contexts/LoginContext'

import ProfilePage from './Pages/ProfilePage'
import Login from './Pages/Login'

const HigherOrderLogin = () => {

    const [userName, setUsername] = useState("")
    const [login, setLogin] = useState(false)

  return (
    <>

    {/* The idea here is that we will pass all the value inside the LoginContext that we want to access */}
    {/* We want to access the userName, setUsername in Login and ProfilePage USING THE LOGIN CONTEXT*/}

    <LoginContext.Provider value={{ userName, setUsername, setLogin }}>
    {console.log("setUsername:", setUsername)}
    {login ? <ProfilePage/>: <Login/>}
    
    </LoginContext.Provider>
    </>
  
  )
}

export default HigherOrderLogin