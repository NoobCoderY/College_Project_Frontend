import React, { useEffect, useState } from "react";
import "./Documents.css";
import img2 from "../../../../assets/Success stories Definition/checkmark (1).svg";
import img1 from "../../../../assets/Web 1280 – 14/Group 9831.svg";
import API_HOST from "../../../../env";
import axios from "axios";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

export default function Documents({ user }) {
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/users/viewDocumentsViaAdmin?pageSize=1000&pageNumber=1&userName=${user?.userName}`,
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setArrayofdocumentdetail(res.data?.success?.data);
      });
  }, [user]);

  const [arrayofdocumentdetail, setArrayofdocumentdetail] = useState([]);

  return (
    <div>
      <div
        style={{ margin: "0", padding: "1vw 3vw" }}
        className="navoftableblogs"
      >
        Document Details
      </div>

      <div style={{ marginLeft: "5vw" }} className="boxoddocuments">
        <div className="titledocuments">Id Verification</div>
        {arrayofdocumentdetail?.map((data) => {
          return (
            <div style={{ marginTop: "1vw" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className="Headingdocuments">{data?.documentType}</div>
                <div style={{ fontWeight: "400" }} className="Headingdocuments">
                  {data?.documentNumber}
                  <span hidden>
                    <img
                      style={{
                        width: "1vw",
                        margin: "0.4vw",
                        position: "relative",
                        bottom: "0.2vw",
                      }}
                      src={img2}
                      alt=""
                    />
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {data?.files?.map((data1) => {
                  return (
                    <div style={{ width: "100%" }}>
                      <div
                        style={{ width: "100%" }}
                        className="inputfilesshowncatboxsingle"
                      >
                        <div className="inputfilesshowncatboxsingleimg">
                          <img src={img1} alt="" />
                        </div>
                        <div className="fileselctednamecate">
                          {data1?.file?.split("%24")[1]?.slice(0, 17)}
                        </div>
                        <div className="inputfilesshowncatboxsingleimg">
                          <a href={`${data1?.file}`} download>
                            {" "}
                            <CloudDownloadOutlinedIcon
                              style={{
                                fontSize: "1.5vw",
                                margin: "0 1vw",
                              }}
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
