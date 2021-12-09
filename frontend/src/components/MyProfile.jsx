import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyProfile.css';
import profilepic from '../img/profil.png';

// use rfce to write function (shortcut) like this
export default function MyProfile() {

    const [localdata, setLocaldata] = useState(null);
    const [file, setFile] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);

    const editProfile = (e) => {
        setIsDisabled(!isDisabled)
    };
    //change value
    function handleChange(e) {
        setLocaldata({
            ...localdata, [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }

    useEffect(async () => {
        const data = localStorage.getItem("user");
        setLocaldata(JSON.parse(data))
        console.log(localdata);
        console.log(data);
        //console.log(JSON.parse(data));
        //await axios.post('http://localhost:5000/api/user', { email: data })
        //    .then(response => console.log("THIS IS ALL DATA", response.data))
        //    .catch(error => console.log(error))
    }, [])

    function changeFile(e) {
        setFile(e.target.files[0])
        console.log(e.target.files);
    }


    function saveFile() {
        if (!file) {
            return alert("select file plzz")
        }
        const formData = new FormData();
        formData.append("selectedfile", file);
        formData.append("test", "this is test");
        formData.append("test2", { foo: "bar" });

        const config = {
            method: "POST",
            body: formData
        };

        fetch("http://localhost:5000/file", config)
            .then(res => res.json())
            .then(console.log())
            .catch(error => console.log(error))
    }


    function saveInfos() {
        const token = localStorage.getItem("jwt");
        const config = {
            headers: {
                authorization: 'Bearer ' + token,
                "content-type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(localdata)
        };
        console.log(config);
        console.log("yeaa");

        fetch("http://localhost:5000/save", config)
            .then(res => {
                console.log(res);
                if (res.status === 401) {
                    alert("unauthor")
                    return
                }
                return res.json()
            })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

    if (!localdata) {
        return "loading"
    }

    return (
        <div>
            <div>
                <input type="file" name="selectedfile" onChange={changeFile} />
                {/* <button onClick={saveFile}>saveFile</button> */}

                {file && (
                    <div>
                        <div>File name:{file.name}</div>
                        <div>File type:{file.type}</div>
                        {/* <div>File size:{(file.size / 1024).toFixed(1)kilobytes }</div> */}
                        <div>File modified date:{file.lastModifiedDate.toISOString()}</div>

                        <img src={URL.createObjectURL(file)} width="100" />
                    </div>
                )}

                <h1><img width="50" src={profilepic} />my profile</h1>
                <button onClick={editProfile}>Edit my profile</button>
            </div>

            <div className="user-data">
                <div className="user-data-label">ID</div>
                <div disabled className="user-data-value">{localdata._id}</div>
            </div>
            <div className="user-data">
                <div className="user-name">First name</div>
                <div className="user-data-value">
                    <input disabled={isDisabled} type="text" onChange={handleChange} name="firstname" value={localdata.firstname} />
                </div>

                <div className="user-name">Last name</div>
                <div className="user-data-value">
                    <input disabled={isDisabled} type="text" onChange={handleChange} name="lastname" value={localdata.lastname} />
                </div>

                <div className="user-username">User name</div>
                <div className="user-data-value">
                    <input type="text" value={localdata.lastname} />
                </div>

                <div className="user-age">Age</div>
                <div className="user-data-value">
                    <input disabled={isDisabled} type="text" onChange={handleChange} name="age" value={localdata.age} />
                </div>

                <div className="user-age">username</div>
                <div className="user-data-value">
                    <input disabled={isDisabled} type="text" onChange={handleChange} name="username" value={localdata.username} />
                </div>

                <div className="user-description">Description</div>
                <div className="user-data-description">
                    <input className="description" type="text" value={localdata.age} />
                </div>

                <br />
                <button onClick={saveInfos}>save</button>
            </div>


        </div>
    )
}


