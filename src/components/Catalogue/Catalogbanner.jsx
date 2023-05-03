import React from "react";

import "./catalogue.css";

import Cataloguecarosel from "./CatalogCarosel";

import Cataloguedescription from "./Cataloguedescription";
import CatalogueFaqreview from "./CatalogueFaqreview";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";

export default function Catalogbanner({ data, width }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="catalogbanner-container">
        <div
          style={{ height: "fit-content", overflow: "hidden" }}
          className="catalogdetails"
        >
          <button
            style={{
              cursor: "pointer",
              zIndex: "100",
              padding: "0.5vw 0.7vw",
              backgroundColor: "white",
              color: "#000",
              borderRadius: width > 700 ? "0.3vw" : "1vw",
              border: "1px solid #d7d7d7",
            }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosNewIcon />
          </button>

          <div
            style={{ paddingTop: "0.5vw", color: "#0052CC", display: "flex" }}
            className="catalogue-titile mt-1"
          >
            {data?.catalougeTitle}
          </div>
          <div
            style={{
              color: "#0052CC",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "white",
                background: "#0052CC",
                height: width > 700 ? "2.5vw" : "8vw",
                lineHeight: width > 700 ? "2.5vw" : "8vw",
                marginLeft: "0vw",
              }}
              className={"homeworktop-button"}
            >
              {data?.category?.category}
            </div>

            <div style={{ margin: "0" }} className="catalogue--basics">
              <div style={{ width: "fit-content" }}>
                <img
                  style={{ marginRight: "1vw" }}
                  src={data?.u_id?.media}
                  alt=""
                />
              </div>
              <div
                style={{ fontSize: "1.1vw" }}
                className="catalogue--basics-title"
              >
                {data?.u_id?.fullName}
              </div>
            </div>
          </div>

          <div className="ctatlogcarouseltitle">
            <div className="textofcontainercatalgue">{data?.bannerTitle}</div>
          </div>
          <div style={{ position: "relative", bottom: "2.2vw" }}>
            <Cataloguecarosel
              width={width}
              img1={data?.files[0]}
              img2={data?.files[1] ? data?.files[1] : data?.files[0]}
              img3={
                data?.files[2]
                  ? data?.files[2]
                  : data?.files[0]
                  ? data?.files[0]
                  : data?.files[1]
              }
              img4={
                data?.files[3]?.file
                  ? data?.files[3]
                  : data?.files[1]
                  ? data?.files[1]
                  : data?.files[0]
                  ? data?.files[0]
                  : data?.files[2]
              }
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "block",
          paddingTop: "0vw",
          position: "relative",
          bottom: "3vw",
        }}
        className="catalogbanner-container"
      >
        <Cataloguedescription data={data} width={width} />
        <CatalogueFaqreview data={data} width={width} />
      </div>
    </>
  );
}
