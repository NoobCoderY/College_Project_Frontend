import React, { useEffect, useState } from "react";
import img1 from "../../../../assets/My profile – 28/Component 70 – 6.svg";
import "./profile.css";

import { makeStyles } from "@material-ui/core";

import ProfileCerticateDetails from "./Profilepopup/ProfileCerticateDetails";

import API_HOST from "../../../../env";
import axios from "axios";




export default function ProfileCertificate({ user, width }) {
 

  const [certificated, setcertificated] = useState([]);
  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/users/viewCertificates?pageSize=50&pageNumber=1&userName=${user?.userName}`
        )
        .then((res) => {
          setcertificated(res?.data?.success?.data);
        });
    }
  }, [user]);

 
  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "1.5vw", margin: "0 0vw" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Certifications</div>
       
    </div>
      <div className="pcertificate-container">
        {certificated?.length > 0 &&
          certificated?.map((cerificate) => {
            return (
              <ProfileCerticateDetails certificate={cerificate} width={width}  setcertificated={setcertificated} user={user}/>
            );
          })}
      </div>
    </div>
  );
}
