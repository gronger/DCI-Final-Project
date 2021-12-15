import React from 'react';
import './RegisterProForm.css';




function RegistrationPro(props) {


  const handleInputChange = props.handleInputChange;


  const sendData = props.sendData;

  function changeFile(e) {
    props.setFile(e.target.files[0])
    console.log(e.target.files);
  }

  return (
    <div id="project-starter-registration" class=" p-5 ">
      <h1 className="mt-5 mb-5"></h1>

      <form className="proform" onSubmit={sendData}>
        <div className="labels">
          <input
            required
            placeholder="Name"
            className="form-control"
            type="text"
            name="firstname"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="labels">
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
            placeholder="What do you do? Photographer, fashion designer, etc"
            className="form-control"
            type="text"
            name="activity"
            onChange={handleInputChange}
          ></input>
        </div>

        <div className="col-md-3 " class="mt-2">
          <input
            required
            placeholder="Who are you looking for? Models, actors, etc"
            className="form-control"
            type="text"
            name="lookingFor"
            onChange={handleInputChange}
          ></input>
          <br/>
          


          <input className="btn btn-outline-secondary" type="file" name="selectedfile" onChange={changeFile} />
          {/* <button onClick={saveFile}>saveFile</button> */}
          {props.file && (
            <div>
              <div>File name:{props.file.name}</div>
              <div>File type:{props.file.type}</div>
              {/* <div>File size:{(file.size / 1024).toFixed(1)kilobytes }</div> */}
              {/* <div>File modified date:{props.file.lastModifiedDate.toISOString()}</div> */}

              <img alt="image of..:" src={URL.createObjectURL(props.file)} width="100" />
            </div>
          )}

        </div>
        <br/>
        <button className="btn btn-outline-warning" style={{fontSize:"22px"}} type="submit" id="btnsend"><b>send</b>
        </button>
      </form>

    </div>
  )
}

export default RegistrationPro;