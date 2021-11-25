import react, { Component } from 'react';
import { useHistory } from 'react-router-dom';

export default function Logout() {


    const history = useHistory();

    function logout() {
        localStorage.clear();
        window.location.reload();  
        history.push("/")
    }

    return (
        <button onClick={logout}>Logout</button>
    )
}

//instead of reload can also useContext

