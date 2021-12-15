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
            <h3 className="id-decoration">ID: {id}</h3>
            
            <ul className="userinfo">
                
                <li className=''>name:  {user.firstname} {user.lastname} </li>
                <li>{user.email}</li>
                <li>{user.age} years old </li>
                <li>{user.weight} Kg.</li>
                <li>{user.height} Cm.</li>
                <li>{user.description}</li> 



            </ul>


        </div>

        
    )
}

export default UserProfile
