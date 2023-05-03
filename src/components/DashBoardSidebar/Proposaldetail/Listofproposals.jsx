import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
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
  width: "90vw",
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

export default function Listofproposals({
  width,
  data,
  data1,
  setdata1,
  setLongofproposallist,
}) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const navigate = useNavigate();
  const handleClosex = () => setOpenx(false);

  const [openx1, setOpenx1] = React.useState(false);
  const handleOpenx1 = () => setOpenx1(true);

  const handleClosex1 = () => setOpenx1(false);

  const [openx2, setOpenx2] = React.useState(false);
  const handleOpenx2 = () => setOpenx2(true);
  const handleClosex2 = () => setOpenx2(false);

  const [openx3, setOpenx3] = React.useState(false);
  const handleOpenx3 = () => setOpenx3(true);
  const handleClosex3 = () => setOpenx3(false);

  const handleAcceptbid = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const date = yyyy + "-" + mm + "-" + dd;

    axios
      .post(
        `${API_HOST}/purposals/acceptPurposal`,
        {
          bidder_id: data?.bidId?._id,
          purposalId: data1?.purposalId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then(() => {
        axios
          .get(`${API_HOST}/purposals/byId?purposalId=${data1?.purposalId}`)
          .then((res) => {
            setdata1(res?.data?.success?.data[0]);
            setLongofproposallist(res?.data?.success?.data[0]?.bidders);
            handleClosex();
            handleClosex1();
            handleClosex2();
            handleClosex3();
          });
      });
  };
  const handleRejectbid = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    const date = yyyy + "-" + mm + "-" + dd;
    axios
      .post(
        `${API_HOST}/purposals/rejectPurposal`,
        {
          bidder_id: data?.bidId?._id,
          purposalId: data1?.purposalId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        axios
          .get(`${API_HOST}/purposals/byId?purposalId=${data1?.purposalId}`)
          .then((res) => {
            setdata1(res?.data?.success?.data[0]);
            setLongofproposallist(res?.data?.success?.data[0]?.bidders);
            handleClosex();
            handleClosex1();
            handleClosex2();
            handleClosex3();
          });
      });
  };

  const [imagesave, setImagesave] = useState();

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
            src={data?.bidId?.user_id?.media || img4}
            alt=""
          />{" "}
          {width > 700
            ? data?.bidId?.user_id?.fullName
            : data?.bidId?.user_id?.fullName?.slice(0, 18)}
        </div>

        {width > 700 && (
          <div style={{ width: width > 700 ? "15vw" : "24vw" }}>
            {data?.bidId?.created_at && (
              <span>
                {new Date(data?.bidId?.created_at).getDate()}/
                {new Date(data?.bidId?.created_at).getMonth() + 1}/
                {new Date(data?.bidId?.created_at).getFullYear()}
              </span>
            )}
          </div>
        )}
        <div style={{ width: width > 700 ? "15vw" : "20vw" }}>
          Rs.{data?.bidId?.budget}
        </div>

        <div
          style={{
            width: width > 700 ? "15vw" : "25vw",
            color:
              data?.bidId?.status === "Completed"
                ? "green"
                : data?.bidId?.status === "pending" ||
                  data?.bidId?.status === "Withdraw" ||
                  data?.bidId?.status === "Reject"
                ? "red"
                : "#0052cc",
          }}
        >
          {data?.bidId?.status ? data?.bidId?.status : "pending"}
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
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(
                      `/dashbaord/${data1?.user_id?.userName}/My Profile`
                    );
                  }}
                >
                  <img
                    style={{
                      width: width > 700 ? "1.5vw" : "4vw",
                      margin: "0 0.1vw",
                      borderRadius: "50%",
                    }}
                    src={data?.bidId?.user_id?.media || img4}
                    alt=""
                  />{" "}
                  {data?.bidId?.user_id?.fullName}
                </span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                Bids Applied On <br />{" "}
                {data?.bidId?.created_at && (
                  <span>
                    {new Date(data?.bidId?.created_at).getDate()}/
                    {new Date(data?.bidId?.created_at).getMonth() + 1}/
                    {new Date(data?.bidId?.created_at).getFullYear()}
                  </span>
                )}
              </div>
              <div style={{ marginRight: "1vw" }}>
                Bidding value <br /> <span>Rs.{data?.bidId?.budget}</span>
              </div>
              <div style={{ marginRight: "1vw" }}>
                {" "}
                Status <br />{" "}
                <span
                  style={{
                    color:
                      data?.bidId?.status === "Completed"
                        ? "green"
                        : data?.bidId?.status === "pending" ||
                          data?.bidId?.status === "Withdraw" ||
                          data?.bidId?.status === "Reject"
                        ? "red"
                        : "#0052cc",
                  }}
                >
                  {data?.bidId?.status ? data?.bidId?.status : "pending"}
                </span>
              </div>
            </div>

            {data?.bidId?.files?.length > 0 && (
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
              {data?.bidId?.files?.map((data) => {
                return (
                  <div
                    style={{ margin: width > 700 ? "" : "1.5vw" }}
                    className="boxofimageorpdf"
                  >
                    <div
                      onClick={() => {
                        if (
                          data?.split(".")[data?.split(".")?.length - 1] ===
                            "jpeg" ||
                          data?.split(".")[data?.split(".")?.length - 1] ===
                            "png" ||
                          data?.split(".")[data?.split(".")?.length - 1] ===
                            "svg" ||
                          data?.split(".")[data?.split(".")?.length - 1] ===
                            "jpg"
                        ) {
                          handleOpenx1();
                          setImagesave(data);
                        }
                      }}
                      style={{ cursor: "pointer" }}
                      className="imageshowboxofpdf"
                    >
                      <img
                        style={{ cursor: "pointer" }}
                        src={
                          data?.split(".")[data?.split(".")?.length - 1] ===
                            "jpeg" ||
                          data?.split(".")[data?.split(".")?.length - 1] ===
                            "png" ||
                          data?.split(".")[data?.split(".")?.length - 1] ===
                            "svg" ||
                          data?.split(".")[data?.split(".")?.length - 1] ===
                            "jpg"
                            ? data
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
                        {data?.split("%24")[1]?.slice(0, 16)}
                      </div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <a href={`${data}`} download>
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
                color: "black",
              }}
              className="dashboardtitilemainparabid"
            >
              {data?.bidId?.description}
            </div>

            {data?.bidId?.status === "pending" && (
              <div
                style={{
                  fontSize: width > 700 ? "0.9vw" : "2.7vw",
                  marginLeft: "1vw",
                  marginTop: "1vw",
                }}
              >
                Are you Ready to Accept the Proposal ?
              </div>
            )}
            {data?.bidId?.status === "pending" && data1?.accept === false ? (
              <div
                style={{
                  float: "right",
                  marginBottom: "2vw",
                  marginTop: width > 700 ? "0.3vw" : "1vw",
                }}
                hidden
                className="homejobbuttons"
              >
                <button
                  style={{ background: "white" }}
                  onClick={() => navigate("/dashbaord/messages")}
                >
                  Chat us
                </button>
                <button style={{ background: "white" }} onClick={handleOpenx2}>
                  Reject
                </button>
                <button style={{ color: "white" }} onClick={handleOpenx3}>
                  Accept
                </button>
              </div>
            ) : (
              ""
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
            <div className="profiledetailstitle">Reject Proposal</div>
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
            The action will Reject "{data?.user_id?.fullName} " for your
            Upcoming proposal. Are you sure Want to Reject the Contract with the
            bidder ?
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
              onClick={() => {
                handleRejectbid();
              }}
              style={{ cursor: "pointer", background: "#FE2323" }}
              className="handlecirclieaboutsave"
            >
              Reject
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={openx3}
        onClose={handleClosex3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style2}>
          <div style={{ padding: "1vw" }} className="profiletitleandmenunav">
            <div className="profiledetailstitle">Accept Proposal</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClosex3}
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
            The action will Accept "{data?.user_id?.fullName}" for your Upcoming
            proposal. Are you sure Want to accept the Contract with the bidder ?
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
              onClick={handleClosex3}
            >
              Cancel
            </div>
            <div
              onClick={() => {
                handleAcceptbid();
              }}
              style={{ cursor: "pointer", background: "#168B12" }}
              className="handlecirclieaboutsave"
            >
              Accept
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
