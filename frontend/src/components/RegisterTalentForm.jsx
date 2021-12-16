import React from "react";
import './RegisterTalentForm.css';


function TalentPro(props) {

    const handleInputChange = props.handleInputChange;
    const sendData = props.sendData;

    function changeFile(e) {
      props.setFile(e.target.files[0])
      console.log(e.target.files);
    }

  return (

    <div  id="talent-registration" class=" p-5 ">
      <h1 className="mt-5 mb-5"></h1>

      <form className="talentform" onSubmit={sendData}>
        <div className="labels" >
          <input
            required
            placeholder="Name"
            className="form-control"
            type="text"
            name="firstname"
            onChange={handleInputChange}
          ></input>
        </div>
        <div >
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
          <br/>

          <input
            className="btn btn-outline-secondary"
            onChange={changeFile}
            type="file"
            id="myFile"
            name="selectedfile"
          />
        </div>
        <br/>
        <button className="btn btn-outline-warning" style={{fontSize:"22px"}} type="submit" id="btnsend"><b>send</b>
        </button>
      </form>

    </div>
  );
}

export default TalentPro;
