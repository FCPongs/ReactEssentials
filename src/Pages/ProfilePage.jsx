import React from 'react'
//! We import the LoginContext to have the access of the different values
import { useContext } from 'react'
import { LoginContext } from '../Contexts/LoginContext'


const ProfilePage = () => {
    //! We get the value of LoginContext's username
    const {userName} = useContext(LoginContext)

  return (
    <>
    <div>This is the Profile Page</div>
    {/* Accessing the username in the login page */}
    <div>Welcome user:  {userName}</div>
    </>
  )
}

export default ProfilePage