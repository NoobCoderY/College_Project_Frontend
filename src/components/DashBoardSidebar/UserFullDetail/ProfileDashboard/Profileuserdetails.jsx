import React, { useEffect, useState } from "react";
import "./profile.css";



import Profileuserdetaillanguage from "./Profilepopup/Profileuserdetaillanguage";

import API_HOST from "../../../../env";
import axios from "axios";


export default function Profileuserdetails({ width, user }) {
  
 

  const [totalOrders, settotalOrders] = useState();

  const [completedOrders, setcompletedOrders] = useState();

  const [success, setsuccess] = useState();

  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/usertotalDetails/viewDetailedModel?userName=${user?.userName}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((res) => {
          settotalOrders(res?.data?.success?.data[0]?.totalOrders);
          setcompletedOrders(res?.data?.success?.data[0]?.completedOrders);
          setsuccess(res?.data?.success?.data[0]?.success);
        })
        .catch((err) => {});
    }
  }, [user]);


  return (
    <div className="Profileuserdetails-container">
      <div className="profileuserdetailsone">
        <div className="profiletitleandmenunav">
          <div className="profiledetailstitle">User profile</div>
          <div className="profiledetailnavmanu"></div>
        </div>
        <div style={{ flexWrap: "wrap" }} className="profileuserdfirst">
          <div style={{ width: "50%" }} className="profileuserfirstone">
            <div className="profileuserfirstonetitle"> Total Orders</div>
            <div className="profileuserfirstonedata">{totalOrders}</div>
          </div>
          <div style={{ width: "50%" }} className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Completed Orders</div>
            <div className="profileuserfirstonedata">{completedOrders}</div>
          </div>
          <div  style={{ width: "50%" }} className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Rating</div>
            <div className="profileuserfirstonedata">
              {user?.oldRating?.$numberDecimal?.slice(0, 4)}
            </div>
          </div>
          <div style={{ width: "50%" }} className="profileuserfirstone">
            <div className="profileuserfirstonetitle">Success</div>
            <div className="profileuserfirstonedata">
              {success?.$numberDecimal}%
            </div>
          </div>
        </div>

        <div className="profileuserdfirst">
          <div className="profileuserfirstone">
            <div
              style={{
                display: "flex",

                alignItems: "center",
              }}
              className="profileuserfirstonetitle"
            >
              <div>Language</div>
            </div>

            {user?.languages?.map((language) => {
              return (
                <Profileuserdetaillanguage language={language} width={width} />
              );
            })}
          </div>
        </div>

        <div className="profileuserfirstonetitle">Email - {user?.emailId} </div>
        <div
          style={{ lineHeight: width > 700 ? "2vw" : "8vw" }}
          className="profileuserfirstonetitle"
        >
          Mobile - {user?.contactNo}
        </div>

        <div className="profileuserfirstonetitle">
          Address - {user?.address}{" "}
        </div>
      </div>
      <div className="profileuserdetailstwo"></div>
      <div style={{ marginTop: "1vw" }} className="profileuserdetailsthree">
        <div style={{}} className="profiletitleandmenunav">
          <div className="profiledetailstitle">About Me</div>
          <div className="profiledetailnavmanu"></div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: width > 700 ? "1.1vw" : "3.1vw",
              margin: "0.5vw 1vw",
            }}
            className="profiledetailstitle"
          >
            {user?.title ? user?.title : "Update Your Title"}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontSize: width > 700 ? "1.1vw" : "3.1vw",
              margin: "0.5vw 1vw",
            }}
            className="profiledetailstitle"
          >
            <div className="aboutprofileuser">
              {user?.fullDescription
                ? user?.fullDescription
                : "Enter Your description"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
