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
         </div>
{/* 
          <div className="col-md-3" class="mt-2">
          <input
            required
            placeholder="What do you do? Model, Actor, etc"
            className="form-control"
            type="text"
            name="activity"
            onChange={handleInputChange}
          ></input>
        </div> */}
        
        <div className="col-md-3 " class="mt-2">
        <label for="activity">What do you do?:</label>

          <select required name="activity" id="activity" onChange={handleInputChange}>
            
            <option value="model">Model</option>
            <option value="actor">Actor</option>
            <option value="dancer">Dancer</option> 
            <option value="other">Other</option>
          </select>
        </div>

        <div className="col-md-3 " class="mt-2">
          <label  className="option" for="lookingFor">What are you looking for?:</label>

          <select required name="lookingFor" id="lookingFor" onChange={handleInputChange}>
            <option value="photographer">Photographer</option>
            <option value="film-director">Film Director</option>
            <option value="fashion-designer">Fashion Designer</option>
            <option value="choreographer">Choreographer</option>
            <option value="other">Other</option>
          </select>
        </div>

          {/* <input
            required
            placeholder="Who are you looking for? Photographers, Film Directors, etc"
            className="form-control"
            type="text"
            name="lookingFor"
            onChange={handleInputChange}
          ></input>
          <br/> */}

          <input
            className="btn btn-outline-secondary"
            onChange={changeFile}
            type="file"
            id="myFile"
            name="selectedfile"
          />
          
        <br/>
        <button className="btn btn-outline-warning" style={{fontSize:"22px"}} type="submit" id="btnsend"><b>send</b>
        </button>
      </form>

    </div>
  );
}

export default TalentPro;
