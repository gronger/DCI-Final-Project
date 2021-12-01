import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyProfile.css'

// use rfce to write function (shortcut) like this
export default function MyProfile() {

    const [localdata, setLocaldata] = useState(123);
    useEffect(async () => {
        const data = localStorage.getItem("user");
        setLocaldata(JSON.parse(data))
        //console.log(JSON.parse(data));
        //await axios.post('http://localhost:5000/api/user', { email: data })
        //    .then(response => console.log("THIS IS ALL DATA", response.data))
        //    .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1>my profile</h1>


            <div className="user-data">
                <div className="user-data-label">ID</div>
                <div className="user-data-value">{localdata._id}</div>
            </div>
            <div className="user-data">
                <div className="user-name">First name</div>
                <div className="user-data-value">
                    <input type="text" value={localdata.firstname} />
                </div>

                <div className="user-name">Last name</div>
                <div className="user-data-value">
                    <input type="text" value={localdata.lastname} />
                </div>

                <div className="user-age">Age</div>
                <div className="user-data-value">
                    <input type="text" value={localdata.age} />
                </div>
            </div>


        </div>
    )
}


