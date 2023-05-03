import React from "react";
import "./Mywebsite.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import API_HOST from "../../../env";
import WebsiteBanner from "../WebsiteDashbaord/WebsiteBanner";
import WebsiteOffers from "../WebsiteDashbaord/WebsiteOffers";
import WebsiteProd from "../WebsiteDashbaord/WebsiteProd";
import WebsiteFooter from "../WebsiteDashbaord/WebsiteFooter";
export default function Mywebsite({ width }) {
  const { id } = useParams();   
  const [websitedata, setwebsitedata] = useState();

  useEffect(() => {
    axios
      .get(`${API_HOST}/websites/forAll?websiteId=${id}`, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        setwebsitedata(res.data?.success?.data);
      });
  }, []);
  
  return (
    websitedata && (
      <div
        style={{
          height: "calc(100vh - 4vw)",
          width: "84vw",
          overflowX: "hidden",
        }}
        className="ScrollTable"
      >
        <div>
          <WebsiteBanner width={width} websitedata={websitedata} />
        </div>
        <div>
          <WebsiteOffers width={width} websitedata={websitedata} />
        </div>
        <div>
          <WebsiteProd
            width={width}
            websitedata={websitedata}
            setwebsitedata={setwebsitedata}
          />
        </div>
        <div>
          <WebsiteFooter width={width} websitedata={websitedata} />
        </div>
      </div>
    )
  );
}
