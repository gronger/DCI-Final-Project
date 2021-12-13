import React from 'react'
import  { useState, useEffect } from 'react';
import './UserProfile.css'
import axios from 'axios';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
  function UserProfile() { 
      let { id } = useParams();
      const [user, setUser] = useState(null)
        //   const [localdata, setLocaldata] = useState(null);
        


    useEffect(() => {
        axios.get("http://localhost:5000/users/" +id )
            .then(result => {
              setUser (result.data);
            })
            .catch(err => console.log(err))
    }, [])


    if (!user) return "loading"

    return (
        <div>
            <h3>ID: {id}</h3>
            
            <ul className="userinfo">
                
                <li>name:  {user.firstname} {user.lastname} </li>
                <li>{user.email}</li>
            </ul>
            {/* <h4> {} </h4> */}

            {/* <div className="user-data">
                <div className="user-data-label">ID</div>
                <div disabled className="user-data-value">{localdata._id}</div>
            </div> */}


        </div>

        
    )
}

export default UserProfile
