import React, { useEffect, useState } from "react";
import "./profile.css";
import "./croper.css";
import "./background.css";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import img4 from "../../../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import img from "../../../../assets/Success stories/alvaro-reyes-qWwpHwip31M-unsplash.png";

export default function ProfileBanner({ user }) {
  return (
    <div className="Profilebanner-container">
      <div className="coverPiccontainer">
        <div className="coverimgqgeprofile">
          <img src={user?.coverPic ? user?.coverPic : img} alt="" />
        </div>
       
      </div>

      <div className="profilePiccontainer">
        <div className="image-profilepart">
          <img src={user?.media ? user?.media : img4} alt="" />
          <div className="profileeditimgqgeprofile"></div>
        </div>

        <div className="profilebannernameandpost">
          <div className="profilebannernameandpostname">{user?.fullName}</div>
          <div className="profilebannernameandpostemail">
            <span>
              <img src={img2} alt="" />
            </span>
            {user?.userName}
          </div>
        </div>
      </div>
    </div>
  );
}
