import react, { Component } from 'react';


export default function Logout() {


    function logout() {
        localStorage.setItem("user", "");
        window.location.reload();  
    }

    return (
        <button onClick={logout}>Logout</button>
    )
}

//instead of reload can also useContext

