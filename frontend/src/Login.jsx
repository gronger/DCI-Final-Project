import React, { useState } from "react";
import './login.css';

export default function Login() {
    const [login, setLogin] = useState({
        email: "",
        password:""
    })
    const [register, setRegister] = useState({
        email: "",
        password:""
    })
    function submitHandler(e) {
        e.preventDefault();
        localStorage.setItem("info",JSON.stringify(register))
    }

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

    return (
        <div className='login'>
            <form  onSubmit={(e) => submitHandler(e)}>
            <p>Register</p>
                <input type="email" value={register.email} onChange={e => setRegister({...register,email:e.target.value})} placeholder="email"></input><br/>
                <input type="password" value={register.password} onChange={e => setRegister({...register,password:e.target.value})} placeholder="password"></input><br/><br/>
                <button type="submit">Register</button>
            </form>
            <form onSubmit={(e) => loginHandler(e)}>
            <p>Login here</p>
                <input type="email" value={login.email} onChange={e => setLogin({...login,email:e.target.value})} placeholder="email"></input><br/>
                <input type="password" value={login.password} onChange={e => setLogin({...login,password:e.target.value})} placeholder="password"></input><br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
