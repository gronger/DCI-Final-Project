
import React, { useState } from "react";

export default function Register() {

    const [register, setRegister] = useState({
        email: "",
        password:""
    })
    function submitHandler(e) {
        e.preventDefault();
        localStorage.setItem("info",JSON.stringify(register))
    }
    return (
        <div className='login'>
            <form  onSubmit={(e) => submitHandler(e)}>
            <p>Register</p>
                <input type="email" value={register.email} onChange={e => setRegister({...register,email:e.target.value})} placeholder="email"></input><br/>
                <input type="password" value={register.password} onChange={e => setRegister({...register,password:e.target.value})} placeholder="password"></input><br/><br/>
                <button type="submit">Register</button>
            </form>
        </div>
    )

}
