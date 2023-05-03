import React, { useEffect, useState } from "react";

import "./Portfoliod.css";

import { useParams } from "react-router-dom";
import API_HOST from "../../env";
import axios from "axios";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";
import BlogBannercarosel from "../../components/DashBoardSidebar/BlogDetail/BlogBannerCaousel";

export default function PortFolioDetail({ width }) {
  const navigate = useNavigate();

  const { portId } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });

    axios
      ?.get(
        `${API_HOST}/portfolio/viewProjectPortfolio?pageSize=8&pageNumber=1&projectPortfolioId=${portId}`
      )
      .then((res) => {
        setData(res?.data?.success?.data[0]);
      });
  }, [portId]);

  return (
    <div className="portfcontainer">
      <button
        style={{
          cursor: "pointer",
          zIndex: "100",
          padding: "0.5vw 0.7vw",
          backgroundColor: "white",
          color: "#000",
          borderRadius: "0.3vw",
          border: "1px solid #d7d7d7",
          marginBottom: "1vw",
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosNewIcon />
      </button>
      <div className="ScrollTable">
        <div>
          <div className="bannerblogimagescaurpsel">
            {data && (
              <BlogBannercarosel
                width={1000}
                img1={data?.icons[0]?.icon}
                img2={
                  data?.icons[1]?.icon
                    ? data?.icons[1]?.icon
                    : data?.icons[0]?.icon
                }
                img3={
                  data?.icons[2]?.icon
                    ? data?.icons[2]?.icon
                    : data?.icons[0]?.icon
                    ? data?.icons[0]?.icon
                    : data?.icons[1]?.icon
                }
                img4={
                  data?.icons[3]?.icon
                    ? data?.icons[3]?.icon
                    : data?.icons[1]?.icon
                    ? data?.icons[1]?.icon
                    : data?.icons[0]?.icon
                    ? data?.icons[0]?.icon
                    : data?.icons[2]?.icon
                }
              />
            )}
          </div>
        </div>

        <div className="titleportfoliod">Title </div>
        <div className="paraportfoliod1">{data?.projectTitle}</div>
        <div hidden className="titleportfoliod">Caption </div>
        <div hidden className="paraportfoliod1">{data?.caption}</div>
        <div className="titleportfoliod">Description </div>
        <div className="paraportfoliod">{data?.projectDescription}</div>
        <div className="titleportfoliod">Period of Completion </div>
        <div className="paraportfoliod">
        {" "}
          Starting Date {data?.startingDate}
          <span style={{ marginLeft: "2vw" }}></span> Completion Date {' '}
          {!data?.currentlyWorking ? data?.completionDate : " Present"}
        </div>

        <div className="titleportfoliod">Skills </div>

        <div className="paraportfoliod1">
          {data?.skills.map((item) => {
            return <>{item + " , "}</>;
          })}
        </div>
        <div className="titleportfoliod">Project URL</div>

        <div className="paraportfoliod2">
          <a href={data?.projectUrl} target="_blank">
            {data?.projectUrl}
          </a>
        </div>
      </div>
    </div>
  );
}
