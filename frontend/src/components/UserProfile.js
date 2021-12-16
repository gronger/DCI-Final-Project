import React from "react";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./UserProfile.css";
import axios from "axios";

import { BrowserRouter as Router, useParams } from "react-router-dom";

function UserProfile() {
  let { id } = useParams();
  const [user, setUser] = useState(null);
  //   const [localdata, setLocaldata] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isMutual, setIsMutual] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/" + id)
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!user) return "loading";

  //   const [match, setMatch] = useState({
  //     matchTarget: "",
  //     matchInitiator: "",
  //   });

  function setMatch() {
    const data = localStorage.getItem("user");
    const currentUser = JSON.parse(data);

    let payload = {
      matchTarget: id,
      matchInitiator: currentUser,
    };

    console.log(payload);

    // axios
    //   .post("http://localhost:5000/newmatch", payload)
    //   .then((response) => {
    //     if (response.status === 200) {

    //     }
    //   .catch((error) => console.log(error));
    // });

    axios
      .post("http://localhost:5000/newmatch", payload)
      .then((response) => {
        if (response.status === 200) {
          setIsMutual(response.data.isMutual);
          handleShow();
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h3>ID: {id}</h3>

      <ul className="userinfo">
        <li className="">
          name: {user.firstname} {user.lastname}{" "}
        </li>
        <li>{user.typeUser}</li>
        <li>{user.activity}</li>
        <li>{user.lookingFor}</li>
        <li>{user.age} years old </li>
        <li>{user.weight} Kg.</li>
        <li>{user.height} Cm.</li>
        <li>{user.description}</li>
      </ul>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {isMutual
            ? "It's a match! Get in touch with " +
              user.firstname +
              " " +
              user.lastname +
              " at " +
              user.email
            : "If " +
              user.firstname +
              " " +
              user.lastname +
              " matches with you too, we'll let you know!"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <ul className="userinfo">
        <li>
          name: {user.firstname} {user.lastname}{" "}
        </li>
        <li>
          <button onClick={setMatch}>
            Would you like to work with this user?
          </button>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;
