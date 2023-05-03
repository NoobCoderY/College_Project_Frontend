import React from "react";

export default function Profileuserdetaillanguage({ language, width }) {
 


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: width > 700 ? "21vw" : "90vw",
        }}
      >
        <div className="profileuserfirstonedata">
          {language?.language} , {language?.proficiencyLevel}
        </div>
   </div>
    </>
  );
}
