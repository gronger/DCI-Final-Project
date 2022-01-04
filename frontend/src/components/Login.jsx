import React, { useState } from "react";
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import 'animate.css';


export default function Login() {

    const history = useHistory();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(null);


    function loginHandler(e) {

        e.preventDefault();
        axios.post('http://localhost:5000/login', login)
            .then(response => {
                console.log(response.status);
                if (response.status === 200) {
                    console.log(response.data);
                    //setIsLoggedin({ ...isLoggedin, isUser: true })
                    localStorage.setItem("user", JSON.stringify(response.data.user))
                    localStorage.setItem("jwt", (response.data.token))
                    // console.log("this is come from BE", response.data)
                    history.push("/main")
                    window.location.reload();
                }

            })
            .catch(error => {
                console.log(123);
                setError(true);
            });
        
    }

    return (
        <div className='login'>
            <form onSubmit={loginHandler}>
                <h1 class="animate__animated animate__backInDown">Login here</h1>

                <div className="prueba" >
                <input className="flabel" type="email" value={login.email} onChange={e => setLogin({ ...login, email: e.target.value })} placeholder="email"></input><br />
                </div>
                <input className="flabel" type="password" value={login.password} onChange={e => setLogin({ ...login, password: e.target.value })} placeholder="password"></input><br /><br />
                
                <div class="container">
                    <button className="btn" type="submit">Submit</button>
                </div><br />
                {error ? <p>invalid Email or Password</p>: null}
                <h5>you dont have Account? register<Link to="/formular"> here</Link></h5>
            <br/>

            </form>
        </div>
        
    )

}
