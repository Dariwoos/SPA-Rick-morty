import React from 'react'
import LoginButton from "./Login.js"
import LogoutButton from "./Logout.js"
import PersonalData from "./PersonalData.js"
import {useAuth0} from "@auth0/auth0-react"
export default function Navbar() {

    const {isAuthenticated} = useAuth0();
    return (
      <div className="navbar">
        {isAuthenticated ? (
          <>
            <PersonalData></PersonalData>
            <LogoutButton></LogoutButton>
          </>
        ) : (
          <LoginButton></LoginButton>
        )}
      </div>
    );
}
