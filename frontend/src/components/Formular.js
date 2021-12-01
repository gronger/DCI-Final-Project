import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Formular = () => {
    const [fakeUser, setFakeUser] = useState()

    console.log("this comes from fake user", fakeUser);

    const history = useHistory();

    const [data, setData] = useState({

    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendData = async (e) => {
        {/* <Formular /> */ }

        e.preventDefault()

        await axios.post('http://localhost:5000/register', data)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        history.push("/");

        console.log(data.name + ' ' + data.lastname + ' ' + data.Age)

    }
    // avoid autmatic processing
    return (

        <div class=' p-5 '>
            <h1 className='mt-5 mb-5'></h1>

            <form className='border  p-5 row p-6' onSubmit={sendData} >
                <div className='col-md-3'>
                    <input
                        required
                        placeholder="Name"
                        className="form-control"
                        type='text'
                        name="firstname"
                        onChange={handleInputChange}

                    ></input>
                </div>

                <div className='col-md-3'>
                    <input
                        required
                        placeholder="lastname"
                        className="form-control"
                        type='text'
                        name="lastname"
                        onChange={handleInputChange}
                    ></input>
                </div>



                <div className='col-md-3' class='mt-2' >
                    <input
                        required
                        placeholder="Email"
                        className="form-control"
                        type='email'
                        name="email"
                        onChange={handleInputChange}

                    ></input>
                </div>

                <div className='col-md-3' class='mt-2' >
                    <input
                        required
                        placeholder="Password"
                        className="form-control"
                        type='password'
                        name="password"
                        onChange={handleInputChange}

                    ></input>
                </div>

                <div className='col-md-3' class='mt-2' >
                    <input
                        required
                        placeholder="Username"
                        className="form-control"
                        type='text'
                        name="username"
                        onChange={handleInputChange}

                    ></input>
                </div>

                <div className='col-md-3' class='mt-2'>
                    <input
                        required
                        placeholder="Age"
                        className="form-control"
                        type='text'
                        name="age"
                        onChange={handleInputChange}
                    ></input>
                </div>


                <div className='col-md-3' class='mt-2' >
                    <input
                        required
                        placeholder="please write down in Cm"
                        className="form-control"
                        type='text'
                        name="height"
                        onChange={handleInputChange}

                    ></input>
                </div>

                <div className='col-md-3 ' class='mt-2'>
                    <input
                        required
                        placeholder="Kg"
                        className="form-control"
                        type='text'
                        name="weight"
                        onChange={handleInputChange}
                    ></input>

                    <input className='btn btn-danger mb-5 mt-5 ' onChange={handleInputChange} type="file" id="myFile" name="filename" />

                </div>
                <button className='btn btn-primary' type='submit'>Send</button>
            </form>

            <h3 className='ml-5  mb-5 mt-5 '>{data.name} - {data.lastname} -{data.Age} - {data.Height} -{data.Weight} </h3>

        </div>
    )
}

export default Formular