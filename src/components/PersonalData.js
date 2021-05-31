import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "../css/PersonalData.css";

export default function PersonalData() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if(isLoading){
        return <div>Loading</div>
    }
    return (
      isAuthenticated && (
        <div className="row">
            <img className="personal-img" src={user.picture} />
            <h5 className="personal-name" >{user.name} </h5>
        </div>
      )
    );
}
