import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Cards.css'
import TinderCards from './TinderCards.js';

export default function Main() {

    //information from DB with useEfect Axios
    // make a state and save it .
    //
    const [dbData, setDbData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/getuser")
            .then(result => {
                console.log(result.data);
                setDbData(result.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>


            <h1 class="maintitle"style={{color: "white"}} >Welcome to Evrima</h1>
            <div className="main titere">

                {dbData ? <TinderCards people={dbData} /> : null}

                {/* {dbData ? dbData.map(x => <Cards username={x.username} typeuser={x.typeUser} age={x.age} />) : null}
 */}            </div>
        </div>

    )
}
