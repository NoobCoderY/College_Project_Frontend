import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import img from "../../../assets/My profile – 28/austin-distel-tLZhFRLj6nY-unsplash.png";
import { useNavigate } from "react-router";
import axios from "axios";
import API_HOST from "../../../env";
import img33 from "../../../assets/Landing page/Group 1179.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  //   height: "45vw",
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "28vw",
};
export default function JobbiddinglisatPopup({
  data,
  Jobdetils,
  setpoststatus,
  poststatus,
}) {
  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);
  const navigate = useNavigate();

  const [openp, setOpenp] = React.useState(false);
  const handleOpenp = () => {
    setOpenp(true);
    setTimeout(function () {
      setOpenp(false);
      setpoststatus(Math.random());
    }, 5000);
  };
  const handleClosep = () => {
    setOpenp(false);
    setpoststatus(Math.random());
  };

  const handleAcceptbid = () => {
    axios
      .post(`${API_HOST}/jobPost/workAssign`, {
        jobPostId: Jobdetils?.jobPostId,
        bidder: data?.bidder,
        bidValue: data?.bidValue,
        _id: data?._id,
        workAssignedTo: data?.bidder,
        workStatus: "accepted",
        assignedJob: true,
        emailId: data?.emailId,
        jobDetails: data?.jobDetails,
        workAssignDate:
          new Date().getDate() +
          "/" +
          (parseInt(new Date().getMonth()) + 1) +
          "/" +
          new Date().getFullYear(),
        date:
          new Date().getDate() +
          "/" +
          (parseInt(new Date().getMonth()) + 1) +
          "/" +
          new Date().getFullYear(),
        bidingId: data?.bidingId,
        status: "accepted",
      })
      .then(() => {
        axios
          .post(`${API_HOST}/jobPost/updateDoerId`, {
            jobPostId: Jobdetils?.jobPostId,
            bidingId: data?.bidingId,
          })
          .then(() => {
            handleClosex();
            handleOpenp();
            setBidstatus("Accepted");
          });
      });
  };
  const [bidstatus, setBidstatus] = useState("");

  const handleRejectbid = () => {
    axios
      .post(`${API_HOST}/jobPost/workRejected`, {
        jobPostId: Jobdetils?.jobPostId,
        bidder: data?.bidder,
        _id: data?._id,
        bidValue: data?.bidValue,
        workAssignedTo: data?.bidder,
        workStatus: "rejected",
        assignedJob: false,
        emailId: data?.emailId,
        jobDetails: data?.jobDetails,
        workAssignDate:
          new Date().getDate() +
          "/" +
          (parseInt(new Date().getMonth()) + 1) +
          "/" +
          new Date().getFullYear(),
        date:
          new Date().getDate() +
          "/" +
          (parseInt(new Date().getMonth()) + 1) +
          "/" +
          new Date().getFullYear(),
        bidingId: data?.bidingId,
        status: "rejected",
      })
      .then(() => {
        handleClosex();
        handleOpenp();
        setBidstatus("Rejected");
      });
  };

  return (
    <div>
      <div className="navoftableblogsdata">
        <div style={{ width: "15vw" }}>{data?.bidder}</div>
        <div style={{ width: "20vw", color:'#656464' }} dangerouslySetInnerHTML={{__html: data?.jobDetails}}></div>
        <div style={{ width: "12vw" }}>{data?.date}</div>

        <div style={{ width: "10vw" }}>${data?.bidValue}</div>
        <div
          style={{
            width: "15vw",
            color:
              data?.status === "pending"
                ? "#F39600"
                : data?.status === "accepted"
                ? "#2AC96A"
                : "red",
            fontWeight: "500",
          }}
        >
          {data?.status}
        </div>
        <div
          onClick={handleOpenx}
          style={{
            width: "7vw",
            fontWeight: "500",
            fontFamily: "Poppins",
            cursor: "pointer",
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
        <Box sx={style}>
          <div style={{ padding: "2vw", width: "100%", height: "100%" }}>
            <div className="appliedjobformtitleflex">
              <div
                style={{ position: "relative", bottom: "1vw" }}
                className="currentchatNamebox"
              >
                <div className="nameimg">
                  <img src={img} alt="" />
                </div>
                <div className="nametag">
                  <div className="nameandtimemessage">
                    <div className="titilemeaagename">{data?.bidder}</div>
                  </div>
                  <div className="firstmessagemessahename">UX/UI Designer</div>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <button
                  style={{
                    border: "none",
                    height: "3vw",
                    fontSize: "1vw",
                    width: "8vw",
                    margin: "0 1vw",
                  }}
                >
                  Send Mail
                </button>
                <span>
                  <CloseIcon
                    onClick={handleClosex}
                    style={{ fontSize: "1.5vw", cursor: "pointer" }}
                  />
                </span>
              </div>
            </div>

            <div className="titilenameappliedpopup">Description</div>
            <div className="descriptionappliedpopup" dangerouslySetInnerHTML={{__html: data?.jobDetails}}>
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. */}
            </div>
            <div className="titilenameappliedpopupmain">Basic Details</div>

            <div className="flexwrapappliedpopup">
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Full Name
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  {data?.bidder}
                </div>
              </div>
              {/* <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Email
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  {data?.emailId}
                </div>
              </div> */}
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Designation
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  UX/UI Designer
                </div>
              </div>
              {/* <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Phone number
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  +91 9273820392
                </div>
              </div> */}
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Bid value
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  ${data?.bidValue}
                </div>
              </div>
              <div style={{ width: "50%", margin: "0.71vw 0vw" }}>
                <div
                  style={{ fontSize: "1.051vw" }}
                  className="titilenameappliedpopup"
                >
                  Date
                </div>
                <div
                  style={{ margin: "0.2vw" }}
                  className="descriptionappliedpopup"
                >
                  {data?.date}
                </div>
              </div>
            </div>

            {data?.status === "pending" ? (
              <div className="homejobbuttons">
                <button
                  style={{ background: "white" }}
                  onClick={() => navigate("/dashbaord/messages")}
                >
                  Chat us
                </button>
                <button
                  style={{ background: "white" }}
                  onClick={handleRejectbid}
                >
                  Rejected
                </button>
                <button style={{ color: "white" }} onClick={handleAcceptbid}>
                  Accepted
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </Box>
      </Modal>

      <Modal
        open={openp}
        onClose={handleClosep}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
          <div className="imgboxofrewardpostlogo">
            <img src={img33} alt="" />
            <span>
              {" "}
              <CloseIcon
                style={{
                  position: "relative",
                  left: "23vw",
                  bottom: "22vw",
                  fontSize: "1.5vw",
                  cursor: "pointer",
                }}
                onClick={() => handleClosep()}
              />
            </span>
          </div>
          <div style={{ textAlign: "center" }} className="rewardtiitle500">
            {" "}
            this Bid is Successfully {bidstatus}{" "}
          </div>

          <div style={{ height: "2vw" }}></div>
        </Box>
      </Modal>
    </div>
  );
}
