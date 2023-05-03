import React from "react";
import img1 from "../../../assets/png/Landing/instagram (2).png";
import img2 from "../../../assets/png/Landing/facebook.png";
import img4 from "../../../assets/png/Landing/Group 7792.png";
export default function WebsiteFooter({ width, websitedata }) {
  return (
    <>
      <div className="footerContainerx">
        <div className="websitefooterlogo">
          <div className="navofwebsite">
            <img src={websitedata?.websiteLogo} alt="" />
            <div className="websitelogoname">{websitedata?.websiteName}</div>
          </div>
          <div className="Linkswebfootere">
            <div className="linkimagewebsite">
              <a
                href={websitedata?.facebookLink}
                target="_blank"
                rel="noreferrer"
              >
                <img src={img2} style={{ fontSize: "2.5vw" }} />
              </a>
            </div>
            <div className="linkimagewebsite">
              <a
                href={websitedata?.instagramLink}
                target="_blank"
                rel="noreferrer"
              >
                <img src={img1} style={{ fontSize: "2.5vw" }} />
              </a>
            </div>
            <div className="linkimagewebsite">
              <a
                href={websitedata?.googleBuisnessLink}
                target="_blank"
                rel="noreferrer"
              >
                <img src={img4} style={{ fontSize: "2.5vw" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="websitefooteraddress">
          <div className="addresswebsite">{websitedata?.companyAddress}</div>
        </div>
      </div>
      <div className="home-footer2">
        © 2023, {websitedata?.websiteName} . All Rights Reserved
      </div>
    </>
  );
}
