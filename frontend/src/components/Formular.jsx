import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import RegisterTalentForm from './RegisterTalentForm.jsx';
import RegisterProForm from './RegisterProForm.jsx';
import './formular.css'

const Formular = () => {
  const [fakeUser, setFakeUser] = useState();

  console.log("this comes from fake user", fakeUser);

  const history = useHistory();

  const [data, setData] = useState({});

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = async (e) => {

    e.preventDefault();

    await axios
      .post("http://localhost:5000/register", data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    history.push("/");

    console.log(data.name + " " + data.lastname + " " + data.Age);
  };
  // avoid autmatic processing
  return (
    <div>
      <div className="form">
        <label>What kind of account would you like to create?</label>
        <div
          onChange={handleInputChange}
        >
          <div className="prueba">
          <label className="label" for="talent">Talent</label>
          <input
            type="radio"
            id="talent"
            name="typeUser"
            value="talent"
          />
        </div> 
      </div>

        <div
                    onChange={handleInputChange}

        >
          <input
            type="radio"
            id="project-starter"
            name="typeUser"
            value="pro"
          />
          <label for="project-starter">Project Starter</label>
        </div>
 
      </div>

      {data.typeUser === "talent" && (
        <RegisterTalentForm 
            data={data}
            handleInputChange={handleInputChange}
            sendData={sendData}
        />
      )} 
      {data.typeUser === "pro" && (
        <RegisterProForm 
        data={data}
        handleInputChange={handleInputChange}
        sendData={sendData}

        />
       
      )}
    </div>
  );
};

export default Formular;
