import React from "react";
import "./Website1.css";
export default function WebsiteBanner({ width, websitedata }) {
  return (
    <>
      <div className="kok">
        <div
          style={{ background: websitedata?.themeColor }}
          className="kok1x"
        ></div>
      </div>
      <div className="Website-bannerx">
        <div className="websitebannerdetailx">
          <div className="navofwebsite">
            <img src={websitedata?.websiteLogo} alt="" />
            <div className="websitelogoname">{websitedata?.websiteName}</div>
          </div>
          <div
            style={{ color: websitedata?.themeColor }}
            className="webbannertitle"
          >
            {websitedata?.bannerTitle}
          </div>
          <div
            
            className="webbannertitle1"
            dangerouslySetInnerHTML={{ __html: websitedata?.headline }}
          >
        
          </div>
          <div
       
            className="webbannertitle2"
            dangerouslySetInnerHTML={{ __html: websitedata?.headline2 }}
          >
           
          </div>
        </div>
        <div className="websitebannerimgx">
          <img src={websitedata?.bannerImage} alt="" />
        </div>
      </div>
      

    </>
  );
}
