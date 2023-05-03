import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import axios from "axios";
import API_HOST from "../../../env";
import img4 from "../../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import img111111 from "../../../assets/unnamed.png";
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
  overflow: "scroll",
};
const style3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
};
const style2 = {
  position: "absolute",
  maxHieght: "90vh",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "91vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "fit-content",
};

export default function Listofproposals({ width, data1, data2, setdata1 ,setdata2 }) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);

  const handleClosex = () => setOpenx(false);

  const [openx1, setOpenx1] = React.useState(false);
  const handleOpenx1 = () => setOpenx1(true);

  const handleClosex1 = () => setOpenx1(false);

  const [imagesave, setImagesave] = useState();
  const [openx2, setOpenx2] = React.useState(false);
  const handleOpenx2 = () => setOpenx2(true);
  const handleClosex2 = () => setOpenx2(false);
  const handlewithdraw = () => {
    axios
      .post(
        `${API_HOST}/bidings/withdraw`,
        {
          bidderId: data2.bidderId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then(() => {
        axios.get(`${API_HOST}/bidings/byId?bidderId=${data2?.bidderId}`).then((res) => {
            setdata1(res?.data?.success?.data?.purposal_id);
            setdata2(res?.data?.success?.data);
            handleClosex2()
          });
      });
  };

  return (
    <div className="listofproposalname">
      <div
        style={{
          padding: width > 700 ? "0" : "2vw 0vw",
          margin: "0",
          fontWeight: "400",
          fontSize: width > 700 ? "1vw" : "2.5vw",
        }}
        className="navoftableblogs"
      >
        <div
          style={{ width: width > 700 ? "25vw" : "40vw", cursor: "pointer" }}
        >
          <img
            style={{
              width: width > 700 ? "1.5vw" : "4vw",
              margin: "0 0.1vw",
              borderRadius: "50%",
            }}
            src={data2?.user_id?.media || img4}
            alt=""
          />{" "}
         {width > 700? data2?.user_id?.fullName:data2?.user_id?.fullName?.slice(0,20)}
        </div>

      {width > 700&&  <div style={{ width: width > 700 ? "15vw" : "24vw" }}>
          {data2?.created_at && (
            <span>
              {new Date(data2?.created_at).getDate()}/
              {new Date(data2?.created_at).getMonth() + 1}/
              {new Date(data2?.created_at).getFullYear()}
            </span>
          )}
        </div>}
        <div style={{ width: width > 700 ? "15vw" : "20vw" }}>
          Rs.{data2?.budget}
        </div>

        <div
          style={{
            width: width > 700 ? "15vw" : "25vw",
            color:
              data2?.status === "Completed"
                ? "green"
                : data2?.status === "pending" ||
                  data2?.status === "Withdraw" ||
                  data2?.status === "Reject"
                ? "red"
                : "#0052cc",
          }}
        >
          {data2?.status ? data2?.status : "pending"}
        </div>

        <div
          onClick={() => {
            handleOpenx();
          }}
          style={{
            width: width > 700 ? "7vw" : "10vw",
            cursor: "pointer",
            color: "#0052CC",
          }}
        >
          View
        </div>
      </div>
      <Modal
        open={openx}
        onClose={handleClosex}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style2}>
          <div
            style={{
              padding: width > 700 ? "2vw" : "1vw",
              width: "100%",
              height: "100%",
              maxHeight: "90vh",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="appliedjobformtitleflex"
            >
              <div>Proposal Detail</div>
              <div>
                <CloseIcon
                  onClick={handleClosex}
                  style={{
                    fontSize: width > 700 ? "1.5vw" : "4vw",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <hr style={{ height: "0.1vw" }} />
            <div
              style={{ margin: "1vw", fontSize: width > 700 ? "" : "2.5vw" }}
              className="activejobpistbudgetbox"
            >
              <div>
                Bidder Name <br />{" "}
                <span>
                  {" "}
                  <img
                    style={{
                      width: width > 700 ? "1.5vw" : "4vw",
                      margin: "0 0.1vw",
                      borderRadius: "50%",
                    }}
                    src={data2?.user_id?.media || img4}
                    alt=""
                  />{" "}
                  {width > 700? data2?.user_id?.fullName:data2?.user_id?.fullName?.slice(0,17)}
                </span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                Bids Applied On <br />{" "}
                {data2?.created_at && (
                  <span>
                    {new Date(data2?.created_at).getDate()}/
                    {new Date(data2?.created_at).getMonth() + 1}/
                    {new Date(data2?.created_at).getFullYear()}
                  </span>
                )}
              </div>
              <div style={{ marginRight: "1vw" }}>
                Bidding value <br /> <span>Rs.{data2?.budget}</span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                {" "}
                Status <br />{" "}
                <span
                  style={{
                    color:
                      data2?.status === "Completed"
                        ? "green"
                        : data2?.status === "pending" ||
                          data2?.status === "Withdraw" ||
                          data2?.status === "Reject"
                        ? "red"
                        : "#0052cc",
                  }}
                >
                  {data2?.status}
                </span>
              </div>
            </div>

            {data2?.files?.length > 0 && (
              <div
                style={{
                  color: "#0052CC",
                  margin: width > 700 ? "0.5vw" : "1vw",
                  fontWeight: "500",
                }}
              >
                Image / Documents
              </div>
            )}
            <div
              style={{
                margin: "1vw",
                flexWrap: "wrap",
                marginTop: "0vw",
                justifyContent: "flex-start",
              }}
              className="activejobpistbudgetbox"
            >
              {data2?.files?.map((data2x) => {
                return (
                  <div
                    style={{ margin: width > 700 ? "" : "1.5vw" }}
                    className="boxofimageorpdf"
                  >
                    <div
                      onClick={() => {
                        if (
                          data2x?.split(".")[
                            data2x?.split(".")?.length - 1
                          ] === "jpeg" ||
                          data2x?.split(".")[
                            data2x?.split(".")?.length - 1
                          ] === "png" ||
                          data2x?.split(".")[
                            data2x?.split(".")?.length - 1
                          ] === "svg" ||
                          data2x?.split(".")[
                            data2x?.split(".")?.length - 1
                          ] === "jpg"
                        ) {
                          handleOpenx1();
                          setImagesave(data2x);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                      className="imageshowboxofpdf"
                    >
                      <img
                        style={{ cursor: "pointer" }}
                        src={
                          data2x?.split(".")[
                            data2x?.split(".")?.length - 1
                          ] === "jpeg" ||
                          data2x?.split(".")[
                            data2x?.split(".")?.length - 1
                          ] === "png" ||
                          data2x?.split(".")[
                            data2x?.split(".")?.length - 1
                          ] === "svg" ||
                          data2x?.split(".")[
                            data2x?.split(".")?.length - 1
                          ] === "jpg"
                            ? data2x
                            : img111111
                        }
                        alt=""
                      />
                    </div>
                    <div className="imageshowboxofpdfname">
                      <div>
                        <PictureAsPdfIcon
                          style={{
                            color: "red",
                            fontSize: width > 700 ? "1.7vw" : "4.5vw",
                          }}
                        />
                      </div>
                      <div className="nameifimagedocuments">
                        {data2x?.split("%24")[1]?.slice(0, 16)}
                      </div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <a href={`${data2x}`} download>
                          {" "}
                          <CloudDownloadOutlinedIcon
                            style={{
                              fontSize: width > 700 ? "1.5vw" : "5vw",
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
            <Modal
              open={openx1}
              onClose={handleClosex1}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={width > 700 ? style1 : style3}>
                {imagesave && (
                  <div className="imgbocofcerti">
                    <img src={imagesave} alt="" />
                  </div>
                )}
              </Box>
            </Modal>
            <div
              style={{ color: "#0052CC", margin: "0.5vw", fontWeight: "500" }}
            >
              Description
            </div>
            <div
              style={{
                width: "100%",
                margin: "0.5vw 1vw",
                fontSize: width > 700 ? "0.85vw" : "2.5vw",

                marginBottom: "0.0vw",
                marginRight: "2vw",
              }}
              className="dashboardtitilemainparabid"
            >
              {data2?.description}
            </div>

            {data2?.status === "pending" && (
              <div
                 hidden
                style={{
                  fontSize: width > 700 ? "0.9vw" : "2.7vw",
                  marginLeft: "1vw",
                  marginTop: "1vw",
                }}
              >
                Are you Ready to withdraw the Proposal ?
              </div>
            )}
            {data2?.status === "pending" && (
              <div
                style={{
                  float: "right",
                  marginBottom: "2vw",
                  marginTop: width > 700 ? "0.3vw" : "1vw",
                  width: width > 700 ? "10vw" : "30vw",
                }}
                hidden
                className="homejobbuttons"
              >
                <button style={{ color: "white" }} onClick={handleOpenx2}>
                  Withdraw
                </button>
              </div>
            )}
          </div>
        </Box>
      </Modal>

      <Modal
        open={openx2}
        onClose={handleClosex2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style2}>
          <div
            style={{ left: "0vw", width: "100%", padding: "1vw" }}
            className="profiletitleandmenunav"
          >
            <div className="profiledetailstitle">Withdraw Proposal</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClosex2}
                  style={{
                    fontSize: width > 700 ? "1.5vw" : "4vw",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#000000" }} />

          <div
            style={{ left: "0vw", width: "100%", padding: "1vw" }}
            className="loginfield"
          >
            The action will withdraw your bid from this Proposal. Are you sure
            Want to Withdraw the Contract with the Proposal ?
          </div>

          <hr style={{ color: "#000000" }} />
          <div
            style={{ marginTop: "0.31vw", padding: "1vw" }}
            className="handlemoreaboutskill"
          >
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClosex2}
            >
              Cancel
            </div>
            <div
              onClick={handlewithdraw}
              style={{ cursor: "pointer", background: "#FE2323" }}
              className="handlecirclieaboutsave"
            >
              Withdraw
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
