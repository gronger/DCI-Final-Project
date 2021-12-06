import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Cards from './Cards';

export default function Main() {

//information from DB with useEfect Axios
// make a state and save it .
//
const [dbData,setDbData] = useState([])

useEffect(()=>{
    axios.get("http://localhost:5000/getuser")
    .then(result=>{
        console.log(result.data);
        setDbData(result.data)
    })
    .catch(err=>console.log(err))
})


return (
    <div className="main">
<h1>Welcome to NameOfApp</h1>

 {dbData.length !== -1 ? dbData.map(x=><Cards title={x.title} body={x.body}/>):null}
    </div>

)


}
