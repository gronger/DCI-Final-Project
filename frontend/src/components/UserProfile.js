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
                <li>{user.age}</li>
                <li>{user.weight}</li>
                <li>{user.height}</li>



            </ul>


        </div>

        
    )
}

export default UserProfile
