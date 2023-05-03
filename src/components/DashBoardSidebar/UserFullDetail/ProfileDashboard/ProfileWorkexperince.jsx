import React, { useEffect, useState } from "react";

import Profileexperincedetail from "./Profilepopup/Profileexperincedetail";

import API_HOST from "../../../../env";
import axios from "axios";



export default function ProfileWorkexperince({ user, width }) {
 
  


  

  const [certificated, setcertificated] = useState([]);
  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/users/viewCompany?pageSize=50&pageNumber=1&user_id=${user?._id}`
        )
        .then((res) => {
          setcertificated(res?.data?.success?.data);
        });
    }
  }, [user]);
  return (
    <div>
      <div style={{ height: "fit-content" }} className="profilebadgecontainer">
        <div
          style={{ padding: "1.5vw", margin: "0 0vw" }}
          className="profiletitleandmenunav"
        >
          <div className="profiledetailstitle">Work Experience</div>
         
     </div>
        {certificated?.map((company) => {
          return <Profileexperincedetail company={company} width={width} setcertificated={setcertificated} user={user}/>;
        })}
      </div>
    </div>
  );
}
