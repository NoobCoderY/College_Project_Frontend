import React from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

import Modal from "@mui/material/Modal";
import img1 from "../../../assets/Jobs/Iconly-Light-Delete.svg";
import img from "../../../assets/Jobs/Iconly-Light-Edit.svg";
import axios from "axios";
import API_HOST from "../../../env";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
export default function ContactBox({ data, setRecall, recall }) {
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .post(
        `${API_HOST}/stories/removeStory`,
        {
          storyId: data?.storyId,
        },
        {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        }
      )
      .then((res) => {
        handleClose3();

        setRecall(!recall);
      });
  };

  return (
    <div
      style={{
        margin: "1vw",
        border: "none",
        boxShadow: "1px 5px 10px #00000050",
        padding: "1vw",
        marginBottom: "2vw",
        height: "fit-content",
      }}
      className="workhistrybox"
    >
      <div
        className="workhistryboxtitle"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        <div
          onClick={() => {
            navigate(`/dashbaord/story/${data?.storyId}`);
          }}
          style={{ cursor: "pointer" }}
        >
          {data?.heading}
        </div>
        <div style={{ width: "7vw", height: "2vw", display: "flex" }}>
          <img
            onClick={() => {
              navigate(`/dashbaord/editstory/${data?.storyId}`);
            }}
            style={{
              margin: "0vw 0.5vw",
              marginRight: "1vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img}
            alt=""
          />
          <img
            onClick={() => {
              handleOpen3();
            }}
            style={{
              margin: "0vw 0.5vw",
              marginRight: "3vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={img1}
            alt=""
          />
        </div>
        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Delete Story</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose3}
                    style={{ fontSize: "1.5vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />

            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              Are you really want to delete this story
            </div>

            <hr style={{ color: "#00000090" }} />
            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
                onClick={handleClose3}
              >
                Cancel
              </div>
              <div
                onClick={() => {
                  handleDelete();
                }}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      <div
        style={{ fontSize: "0.95vw", marginTop: "1vw", color: "black" }}
        className="workhistryboxdata"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "right",
          height: "1.5vw",
        }}
        className="workhistryboxdate"
      >
        {/* {data?.created_at?.slice(0, 10)} */}
        {new Date(data?.created_at).getDate()}/
        {new Date(data?.created_at).getMonth() + 1}/
        {new Date(data?.created_at).getFullYear()}
      </div>
    </div>
  );
}
