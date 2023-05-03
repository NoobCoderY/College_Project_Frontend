import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API_HOST from "../../../env";
import BiddingPropasalList from "./BiddingPropasalList";
import img12 from "../../../assets/Landing page/Group 787.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function Jobdetils() {
  const { postid } = useParams();
  const [poststatus, setpoststatus] = useState(1);
  useEffect(() => {
    axios
      .get(`${API_HOST}/jobPost/viewJobPost?jobPostId=${postid}`)
      .then((res) => {
        setpostjobdetailforbid(res.data?.success?.data[0]);
        console.log(res.data?.success?.data[0]);
      });
  }, [postid, poststatus]);

  const [postjobdetailforbid, setpostjobdetailforbid] = useState();

  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{ fontSize: "1.4vw", margin: "0.7vw 1vw" }}
        className="dashboardtitilemain"
      >
        Job Details
      </div>
      <div style={{ background: "white", padding: "1vw" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="taggreen">{postjobdetailforbid?.category} </div>
          <div
            style={{ fontSize: "0.9vw", marginLeft: "1vw" }}
            className="taggreen1"
          >
            {" "}
            {postjobdetailforbid?.subCategory}
          </div>
        </div>

        <div
          style={{
            margin: "0.8vw 1vw",
            color: "#0052CC",
            marginBottom: "0.30vw",
          }}
          className="dashboardtitilemain"
        >
          {postjobdetailforbid?.workTitle} ({postjobdetailforbid?.trackingId})
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            <LocationOnOutlinedIcon
              style={{
                fontSize: "1.5vw",
                fontWeight: "400",
                margin: "0vw 1vw",
              }}
            />
          </span>
          <span style={{ fontSize: "1.1vw", fontWeight: "500" }}>
            {" "}
            {postjobdetailforbid?.remote
              ? "Remote"
              : postjobdetailforbid?.onSite}
          </span>
        </div>

        <div
          style={{
            width: "100%",
            margin: "0.5vw 1vw",
            fontSize: "0.85vw",
            marginBottom: "0.0vw",
          }}
          className="dashboardtitilemainparabid"
        >
          {postjobdetailforbid?.shortDescription}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1vw",
          }}
        >
          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#0052CC",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
              Posted On
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: "0.6vw",
                    width: "2vw",
                    objectFit: "contain",
                  }}
                  src={img12}
                  alt=""
                />
              </span>

              {postjobdetailforbid?.jobPostingDate}
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#0052CC",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
              Posted by
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: "0.6vw",
                    width: "2vw",
                    objectFit: "contain",
                  }}
                  src={img12}
                  alt=""
                />
              </span>

              {postjobdetailforbid?.fullName}
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#0052CC",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
              Budget
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: "0.6vw",
                    width: "2vw",
                    objectFit: "contain",
                  }}
                  src={img12}
                  alt=""
                />
              </span>
              ${postjobdetailforbid?.minimumBudget} - $
              {postjobdetailforbid?.maximuBudget}
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#0052CC",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
              Duration
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: "0.6vw",
                    width: "2vw",
                    objectFit: "contain",
                  }}
                  src={img12}
                  alt=""
                />
              </span>
              3 Months
            </div>
          </div>

          <div className="detailjobposttags">
            <div
              style={{
                margin: "0.5vw 0vw",
                color: "#0052CC",
                marginBottom: "0.40vw",
                fontSize: "1vw",
              }}
            >
              Expires on
            </div>
            <div className="tagvaluejobpostbox">
              <span>
                <img
                  style={{
                    margin: "0.6vw",
                    width: "2vw",
                    objectFit: "contain",
                  }}
                  src={img12}
                  alt=""
                />
              </span>
              07 Days
            </div>
          </div>
        </div>
      </div>{" "}
      <div style={{ marginBottom: "0vw" }} className="dashboardtitilemain">
        skills
      </div>
      <div
        style={{ marginTop: "0vw", padding: "0.51vw", flexWrap: "wrap" }}
        className="flexofcategories"
      >
        {postjobdetailforbid?.skill1 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill1}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill2 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill2}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill3 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill3}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill4 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill4}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill5 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill5}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill6 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill6}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill7 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill7}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill8 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill8}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill9 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill9}
          </div>
        ) : (
          ""
        )}
        {postjobdetailforbid?.skill10 ? (
          <div className="Categoriessmallboxes">
            {postjobdetailforbid?.skill10}
          </div>
        ) : (
          ""
        )}
      </div>
      <div style={{ marginBottom: "0vw" }} className="dashboardtitilemain">
        List of Proposals
      </div>
      <BiddingPropasalList
        setpoststatus={setpoststatus}
        poststatus={poststatus}
        listOfBider={postjobdetailforbid?.listOfBider}
        Jobdetils={postjobdetailforbid}
      />
    </div>
  );
}
