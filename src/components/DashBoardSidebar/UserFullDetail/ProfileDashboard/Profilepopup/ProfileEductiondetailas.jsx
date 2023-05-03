import React, { useState } from "react";




export default function Profileeducationdetails({
  education,
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
        <div style={{ padding: "0vw" }} className="pworkexperinxecontainer">
          <div className="pworkexperincebox">
            <div className="pworkexperinceboxtext">
              <div className="pworkexperincebox-name">
                {education?.collegeName}
              </div>
              <div
                style={{ margin: width > 700 ? "0.1vw" : "0.5vw" }}
                className="pworkexperincebox-name1"
              >
                {education?.degree} ({education?.areaOfStudy}) | {" "}
                {education?.fromDate}/{education?.toDate}
              </div>
              <div
                style={{
                  fontSize: width > 700 ? "0.851vw" : "2vw",
                  color: "black",
                  opacity: "0.7",
                }}
                className="profileuserfirstonedata"
              >
                {education?.description}
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
