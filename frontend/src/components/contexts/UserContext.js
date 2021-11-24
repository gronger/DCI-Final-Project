import React, { useState, createContext } from 'react';

export const UserContext = createContext();

function InfoProvider(props) {

    const [loginStatus, setLoginStatus] = useState({
        isLogin: false,

    });
    

    return (
        <UserContext.Provider value={[loginStatus, setLoginStatus]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default InfoProvider;

