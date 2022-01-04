import React, { useState, useEffect } from 'react';
import './MyProfile.css';
import profilepic from '../img/profil.png';

// use rfce to write function (shortcut) like this
export default function MyProfile() {

    const [localdata, setLocaldata] = useState(null);
    const [file, setFile] = useState(null);
    const [isDisabled, setIsDisabled] = useState(true);

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
//was using async below
    useEffect(() => {
        const data = localStorage.getItem("user");
        setLocaldata(JSON.parse(data))
        console.log(localdata);
        console.log(data);
    }, [])

    function changeFile(e) {
        setFile(e.target.files[0])
        console.log(e.target.files);
    }


    // function saveFile() {
    //     if (!file) {
    //         return alert("select file plzz")
    //     }
    //     const formData = new FormData();
    //     formData.append("selectedfile", file);
    //     formData.append("test", "this is test");
    //     formData.append("test2", { foo: "bar" });

    //     const config = {
    //         method: "POST",
    //         body: formData
    //     };

    //     fetch("http://localhost:5000/file", config)
    //         .then(res => res.json())
    //         .then(console.log())
    //         .catch(error => console.log(error))
    // }


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
                    alert("Unauthorised")
                    return
                }

                if (res.status === 200) {
                    alert("Your profile has been updated!")
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
            <div className="user-data">
                <div className="user-data-label">
                <p>ID</p> 
                </div>

                <div disabled className="user-data-value-id">{localdata._id}</div>
            </div>

            <div className="editpr"  >
                <h2>Edit Your Profile</h2>
                <input className="editpr"  type="file" name="selectedfile" onChange={changeFile} />
            <div>
                <input type="file" name="selectedfile" onChange={changeFile} />
                {/* <button onClick={saveFile}>saveFile</button> */}

                {file && (
                    <div className="funciona">
                        <div>File name:{file.name}</div>
                        <div>File type:{file.type}</div>
                        {/* <div>File size:{(file.size / 1024).toFixed(1)kilobytes }</div> */}
                        <div>File modified date:{file.lastModifiedDate.toISOString()}</div>

                        <img className="profileimg" src={URL.createObjectURL(file)} />

                    </div>
                )}

                {/* <h1><img className="profileimg" src={profilepic} />my profile</h1> */}
                <button  onClick={editProfile}>Edit my profile</button>
            </div>

            
                <h1><img className="profileimg" src={profilepic} />My Profile</h1>
                <button className="centered-button" onClick={editProfile}>Edit my profile</button>
            </div>

            <div className="user-data">
                <div className="user-data-label white-text">ID</div>
                <div disabled className="user-data-value">{localdata._id}</div>
            </div>
            <div className="user-data">
                <div className="user-name">First Name</div>
                <div className="user-data-value">
                    <input disabled={isDisabled} type="text" onChange={handleChange} name="firstname" value={localdata.firstname} />
                </div>

                <div className="user-name">Last Name</div>
                <div className="user-data-value">
                <input disabled={isDisabled} type="text" onChange={handleChange} name="lastname" value={localdata.lastname} />
                </div>

                <div className="user-username">Username</div>
                <div className="user-data-value">
                    <input type="text" disabled={isDisabled} onChange={handleChange} name='username' value={localdata.username} />
                </div>

                <div className="user-age">Age</div>
                <div className="user-data-value">
                    <input disabled={isDisabled} type="text" onChange={handleChange} name="age" value={localdata.age} />
                </div>


                <div className="user-description">Description</div>
                <div className="user-data-description">
                    <input  type="text" disabled={isDisabled} onChange={handleChange} name='description' value={localdata.description ? localdata.description : ''} />
                </div>

                <br />
                <button onClick={saveInfos}>Save</button>
            </div>


        </div>
    )
}