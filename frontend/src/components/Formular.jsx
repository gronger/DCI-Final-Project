import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegisterTalentForm from './RegisterTalentForm.jsx';
import RegisterProForm from './RegisterProForm.jsx';
import './Formular.css'

const Formular = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});

  const history = useHistory();

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = async (e) => {

    e.preventDefault();
    console.log(data);

    const formData = new FormData();
    formData.append("selectedfile", file);
    formData.append("typeUser", data.typeUser);
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("age", data.age);
    formData.append("activity", data.activity);
    formData.append("lookingFor", data.lookingFor);
    formData.append("height", data.height);
    formData.append("weight", data.weight);

    const config = {
      method: "POST",
      body: formData
    };

    fetch("http://localhost:5000/register", config)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    history.push("/");

  };

  return (
    <div className="animate__animated animate__backInRight">
      <div className="form">
        <label>What kind of account would you like to create?</label>

        <div
          onChange={handleInputChange} className="radio"
        >
          <input
            type="radio"
            id="Talent"
            name="typeUser"
            value="Talent"
          />
          <label for="Talent">Talent</label>
        </div>

        <div
          onChange={handleInputChange} className="radio"

        >
          <input
            type="radio"
            id="project-starter"
            name="typeUser"
            value="Pro"
          />
          <label for="project-starter">Project Starter</label>
        </div>

      </div>

      {data.typeUser === "Talent" && (
        <RegisterTalentForm
          data={data}
          handleInputChange={handleInputChange}
          sendData={sendData}
          file={file}
          setFile={setFile}
        />
      )}
      {data.typeUser === "Pro" && (
        <RegisterProForm
          data={data}
          handleInputChange={handleInputChange}
          sendData={sendData}
          file={file}
          setFile={setFile}

        />

      )}
    </div>
  );
};

export default Formular;
