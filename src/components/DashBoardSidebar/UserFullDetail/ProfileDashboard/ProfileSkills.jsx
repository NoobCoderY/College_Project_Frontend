import React from "react";


import "./profile.css";

export default function ProfileSkills({ user }) {
  return (
    <div style={{ height: "fit-content" }} className="profilebadgecontainer">
      <div
        style={{ padding: "1.5vw", margin: "0" }}
        className="profiletitleandmenunav"
      >
        <div className="profiledetailstitle">Skills</div>
       
      </div>

      <div className="pallskillboxes">
        {user?.noOfSkillSet?.length>0&&user?.noOfSkillSet?.map((skill) => {
          return <div className="pskillbox">{skill?.skill}</div>;
        })}
      </div>
    </div>
  );
}
