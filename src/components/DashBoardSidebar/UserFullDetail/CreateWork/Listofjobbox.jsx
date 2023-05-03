import React from "react";

import img2 from "../../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import { useNavigate } from "react-router";
import img1 from "../../../../assets/Jobs/Iconly-Light-Delete.svg";
import axios from "axios";
import API_HOST from "../../../../env";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};
export default function Listofjobbox({ data, setRecall, recall, width }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleltecatalogue = () => {
    axios
      .post(
        `${API_HOST}/purposals/removePurposal`,
        {
          purposalId: data?.purposalId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        setRecall(!recall);
        handleClose();
      });
  };

  return (
    <div>
      <div
        style={{
          overflow: "hidden",
          display: "block",
          width: width > 700 ? "" : "90vw",
          marginLeft: width > 700 ? "0.2vw" : "2vw",
          marginBottom: "1vw",
          marginTop: "1vw",
        }}
        className="activejobpostbox"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5vw",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "0vw" }} className="tagblue">
            {data?.category?.category}
          </div>
          <div hidden style={{ width: width > 700 ? "5vw" : "10vw", display: "flex" }}>
            <img
              onClick={() => handleOpen()}
              style={{
                margin: "0.5vw 0.5vw",
                width: width > 700 ? "1.4vw " : "4vw",
                height: width > 700 ? "1.4vw" : "4vw",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
              }}
              src={img1}
              alt=""
            />{" "}
            <img
              onClick={() =>
                navigate(`/dashbaord/editcreatework/${data?.purposalId}`)
              }
              style={{
                margin: "0.5vw 0.5vw",
                width: width > 700 ? "1.4vw " : "4vw",
                height: width > 700 ? "1.4vw" : "4vw",
                borderRadius: "50%",
                cursor: "pointer",
                objectFit: "cover",
              }}
              src={img2}
              alt=""
            />
          </div>
        </div>
        <div style={{ height: "1.1vw" }} className="activejobpostname">
          {data?.title?.length > 40
            ? data?.title?.slice(0, 40) + ".."
            : data?.title}{" "}
        </div>
        <div
          style={{
            lineHeight: width > 700 ? "1.2vw !important" : "3vw !important",
            color: "#0053cc",
          }}
          className="activejobpistbudgetbox"
        >
          <div>
            Budget <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#000000",
              }}
            >
              {data?.budget}
            </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            Location <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#000000",
              }}
            >
              {data?.remote
                ? "Remote"
                : data?.location?.length > 20
                ? data?.location?.slice(0, 18) + ".."
                : data?.location}
            </span>
          </div>
          <div style={{ marginRight: "1vw" }}>
            Expired on <br />{" "}
            <span
              style={{
                fontSize: width > 700 ? "0.9vw" : "2.7vw",
                position: "relative",
                bottom: "0.3vw",
                color: "#000000",
              }}
            >
              {data?.dueDate && (
                <span>
                  {new Date(data?.dueDate).getDate()}/
                  {new Date(data?.dueDate).getMonth() + 1}/
                  {new Date(data?.dueDate).getFullYear()}
                </span>
              )}
            </span>
          </div>
        </div>
        <div
          style={{ height: width > 700 ? "4.5vw" : "12vw", margin: "0vw" }}
          className="descriptionactibeobbox"
        >
          <div
            style={{
              height: width > 700 ? "3.5vw" : "11vw",
              color: "black",
              fontWeight: "400",
            }}
          >
            {width > 700
              ? data?.description?.slice(0, 180)
              : data?.description?.slice(0, 165)}
          </div>
        </div>

        <hr />
        <div style={{ paddingLeft: "0vw" }} className="flexlastactiveb">
          <div>No of Proposoals - {data?.bidders?.length}</div>

          <div
            onClick={() => {
              navigate(
                `/dashbaord/jobdetail/${
                  data?.purposalId ? data?.purposalId : 2
                }`
              );
            }}
            style={{ color: "#00000090", cursor: "pointer" }}
          >
            {" "}
            See More
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style1}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle"> Delete Proposal</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#000000" }} />
          <div
            style={{
              color: "gray",
              fontSize: width > 700 ? "1vw" : "2.7vw",
              fontWeight: "300",
            }}
            className="profiledetailstitle"
          >
            The action will delete "{data?.title}"
          </div>
          <div
            style={{
              color: "gray",
              fontSize: width > 700 ? "1vw" : "2.7vw",
              fontWeight: "400",
              marginBottom: "5vw",
            }}
            className="profiledetailstitle"
          >
            Are you sure you want to delete this Proposal?
          </div>
          <hr style={{ color: "#000000" }} />
          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClose}
            >
              Cancel
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
              onClick={deleltecatalogue}
            >
              Delete
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
