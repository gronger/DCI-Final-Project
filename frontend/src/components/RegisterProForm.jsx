import React, { useState } from 'react';



function RegistrationPro(props) {


  const handleInputChange = props.handleInputChange;
  const data = props.data;


  const sendData = props.sendData;

  function changeFile(e) {
    props.setFile(e.target.files[0])
    console.log(e.target.files);
  }

  return (
    <div id="project-starter-registration" class=" p-5 ">
      <h1 className="mt-5 mb-5"></h1>

      <form className="border  p-5 row p-6" onSubmit={sendData}>
        <div className="col-md-3">
          <input
            required
            placeholder="Name"
            className="form-control"
            type="text"
            name="firstname"
            onChange={handleInputChange}
          ></input>
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


          <input type="file" name="selectedfile" onChange={changeFile} />
          {/* <button onClick={saveFile}>saveFile</button> */}
          {props.file && (
            <div>
              <div>File name:{props.file.name}</div>
              <div>File type:{props.file.type}</div>
              {/* <div>File size:{(file.size / 1024).toFixed(1)kilobytes }</div> */}
              {/* <div>File modified date:{props.file.lastModifiedDate.toISOString()}</div> */}

              <img src={URL.createObjectURL(props.file)} width="100" />
            </div>
          )}

        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>

      <h3 className="ml-5  mb-5 mt-5 ">
        {data.name} - {data.lastname} -{data.Age} - {data.activity} -
        {data.lookingFor}{" "}
      </h3>
    </div>
  )
}

export default RegistrationPro;