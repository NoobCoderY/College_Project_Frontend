import React from "react";

export default function WebsiteOffers({ width, websitedata }) {
  return (
    <div className="websiteoffercontainerx">
         <div style={{ color: websitedata?.themeColor }} className="offerheading">
        Specialized In
      </div>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" ,marginBottom:"2vw" }}>
        {websitedata?.specializedTags?.map((data1) => {
          return (
            data1 && <div style={{ background: websitedata?.themeColor }} className="skillmap">{data1}</div>
          );
        })}
      </div>
      <div style={{ color: websitedata?.themeColor }} className="offerheading">
      {websitedata?.offerHeadlines}
      </div>

      <div className="flexofoffers">
        {websitedata?.offers?.length > 0 &&
          websitedata?.offers?.map((data) => {
            return (
              <div
                style={{
                  background: `url(${data?.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "repeat",
                }}
                className="offerswebsite"
              >
                <div className="nameofferweb">{data?.name}</div>
                <div className="headofferweb">{data?.heading}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
