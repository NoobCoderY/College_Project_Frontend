import React, { useState } from "react";

export default function Profileexperincedetail({
  company,
  width,
  setcertificated,
  user,
}) {
  
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "1vw 2vw",
        }}
      >
        <div>
          <div className="pworkexperincebox">
            <div className="pworkexperinceboxtext">
              <div className="pworkexperincebox-name">
                {company?.jobTitle} | {company?.companyName}
              </div>
              <div
                style={{
                  color: "black",
                  opacity: "0.7",
                  margin: "0",
                  padding: "0",
                }}
                className="pworkexperincebox-name1"
              >
                {company?.startDate} /
                {company?.workingCurrently ? "present" : company?.endDate}
              </div>
              <div
                style={{
                  fontSize: width > 700 ? "0.851vw" : "2.2vw",
                  color: "black",
                  opacity: "0.7",
                  margin: "0",
                  padding: "0",
                }}
                className="profileuserfirstonedata"
              >
                {company?.description}
              </div>
            </div>
          </div>
        </div>
     </div>
      <hr
        style={{
          width: "90%",
          margin: "auto",
          marginBottom: "0.5vw",
          color: "#00000090",
        }}
      />
    </>
  );
}
