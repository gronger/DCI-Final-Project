import React, { useState, useContext } from "react";
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './contexts/UserContext.js';
import { useHistory } from 'react-router-dom';


export default function Login() {

    const history = useHistory();

    const [loginStatus, setLoginStatus] = useContext(UserContext);

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })


    async function loginHandler(e) {

        e.preventDefault();
        await axios.post('http://localhost:5000/login', login)
            .then(response => {
                if (response.status === 200) {

                    //setIsLoggedin({ ...isLoggedin, isUser: true })
                    localStorage.setItem("user", response.data.username)
                    console.log("this is come from BE", response.data)
                    localStorage.setItem("test", true);
                    history.push("/main")
                    window.location.reload();
                }

            })
            .catch(error => console.log(error));
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
            <form onSubmit={loginHandler}>
                <p>Login here</p>
                <input type="email" value={login.email} onChange={e => setLogin({ ...login, email: e.target.value })} placeholder="email"></input><br />
                <input type="password" value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} placeholder="password"></input><br /><br />
                <button type="submit">Submit</button>
                <h3>you dont have Account? register<Link to="/formular"> here</Link></h3>
            </form>
        </div>
    )

}
