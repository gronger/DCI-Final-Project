import React, { useState } from "react";
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [login, setLogin] = useState({
        email: "",
        password:""
    })

    function loginHandler(e) {

        e.preventDefault();
        let data = localStorage.getItem("info");
        console.log(JSON.parse(data));
        let changedata = JSON.parse(data);
        if (changedata.email === login.email && changedata.password === login.password) {
            return alert ("succsess")
        } else {
            return alert (("not match"));
        }
    }

    // const loginHandler = (e) => {
    //     e.preventDefault()
    //     console.log("User is Logged in");

    //     function setIsLoggedin() {

    //     }

    //     let user = "user111";
    //     let isLoggedin = "isloggggedin";
    //     let history = "hissstory";

    //     axios.post("http://localhost:5000/login", user)
    //         .then(response => {
    //             console.log(response.data)
    //             if (response.status === 200) {
    //                 setIsLoggedin({ ...isLoggedin, isUser: true })
    //                 localStorage.setItem("user",response.data.username)
    //                 return history.push('/messages')
    //             }
    //         })
    //         .catch(err => console.log(err))


    // }


    return (
        <div className='login'>
            <form onSubmit={(e) => loginHandler(e)}>
            <p>Login here</p>
                <input type="email" value={login.email} onChange={e => setLogin({...login,email:e.target.value})} placeholder="email"></input><br/>
                <input type="password" value={login.password} onChange={e => setLogin({...login,password:e.target.value})} placeholder="password"></input><br/><br/>
                <button type="submit">Submit</button>
                <h3>you dont have Account? register<Link to="/register"> here</Link></h3>
            </form>
        </div>
    )

}
