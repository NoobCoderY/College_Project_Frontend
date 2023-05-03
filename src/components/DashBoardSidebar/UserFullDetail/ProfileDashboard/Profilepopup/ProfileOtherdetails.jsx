import React, { useState } from "react";


export default function ProfileotherDetails({
  other,
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
            {/* <div className="pworkexperinceboximg">
              <img src={img22} alt="" />
            </div> */}
            <div className="pworkexperinceboxtext">
              <div className="pworkexperincebox-name">{other?.title}</div>
              <div
                style={{ margin: "0.1vw" }}
                className="pworkexperincebox-name1"
              >
                {other?.fromDate} /
                {other?.workingCurrently ? "present" : other?.toDate}
              </div>
              <div
                style={{
                  fontSize: width > 700 ? "0.851vw" : "2.3vw",
                  color: "black",
                  opacity: "0.7",
                  margin: "0",
                  padding: "0",
                }}
                className="profileuserfirstonedata"
              >
                {other?.description}
              </div>
            </div>
          </div>
        </div>
    </div>
      <hr
        style={{
          width: "70vw",
          margin: "0 4vw",
          marginBottom: "1vw",
          color: "#00000090",
        }}
      />
    </>
  );
}
