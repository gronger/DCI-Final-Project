import React from "react";
import { useState, useEffect } from "react";
import "./UserProfile.css";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function UserProfile() {
  let { id } = useParams();
  const [user, setUser] = useState(null);
  //   const [localdata, setLocaldata] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/" + id)
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!user) return "loading";

  // const [match, setMatch] = useState({
  //     matchTarget: "",
  //     matchInitiator: ""
  // });

  function setMatch() {
    // reminder of backend

    //         POST http://localhost:5000/newmatch
    //         Content-Type: application/json

    // {

    // }
// 2 browsrers to test// save isMutual into useState 

    const data = localStorage.getItem("user");
    const currentUser = JSON.parse(data);

    let payload = {
      matchTarget: id,
      matchInitiator: currentUser
    };

    console.log(payload);

    axios
      .post("http://localhost:5000/newmatch", payload)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          if (response.data.isMutual) {
              alert("Mutual." + user.email );

          } else {
              alert("not mutual");
          }
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h3>ID: {id}</h3>

      <ul className="userinfo">
        <li>
          name: {user.firstname} {user.lastname}{" "}
        </li>
        <li>
          <button onClick={setMatch}>
            Would you like to work with this user?
          </button>
        </li>

        {/* <li>{user.email}</li> */}
      </ul>
      {/* <h4> {} </h4> */}

      {/* <div className="user-data">
                <div className="user-data-label">ID</div>
                <div disabled className="user-data-value">{localdata._id}</div>
            </div> */}
    </div>
  );
}

export default UserProfile;
