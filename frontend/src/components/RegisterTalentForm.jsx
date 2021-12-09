import React, { useState } from "react";
function TalentPro(props) {

    const handleInputChange = props.handleInputChange;
    const data = props.data;
    const sendData = props.sendData;

    function changeFile(e) {
      props.setFile(e.target.files[0])
      console.log(e.target.files);
    }

  return (

    <div  id="talent-registration" class=" p-5 ">
      <h1 className="mt-5 mb-5"></h1>

      <form className="border  p-5 row p-6" onSubmit={sendData}>
        <div  className="col-md-3">
         <div className="prueba">
          <input 
            required
            placeholder="Name"
            className="form-control"
            type="text"
            name="firstname"
            onChange={handleInputChange}
          ></input>
          </div>

        </div>

        <div className="col-md-3">
          <input
            required
            placeholder="lastname"
            className="form-control"
            type="text"
            name="lastname"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="col-md-3" class="mt-2">
          <input
            required
            placeholder="Email"
            className="form-control"
            type="email"
            name="email"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="col-md-3" class="mt-2">
          <input
            required
            placeholder="Password"
            className="form-control"
            type="password"
            name="password"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="col-md-3" class="mt-2">
          <input
            required
            placeholder="Username"
            className="form-control"
            type="text"
            name="username"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="col-md-3" class="mt-2">
          <input
            required
            placeholder="Age"
            className="form-control"
            type="text"
            name="age"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="col-md-3" class="mt-2">
          <input
            required
            placeholder="Cm."
            className="form-control"
            type="text"
            name="height"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="col-md-3 " class="mt-2">
          <input
            required
            placeholder="Kg."
            className="form-control"
            type="text"
            name="weight"
            onChange={handleInputChange}
          ></input>

          <input
            className="btn btn-danger mb-5 mt-5 "
            onChange={changeFile}
            type="file"
            id="myFile"
            name="selectedfile"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>

    </div>
  );
}

export default TalentPro;
