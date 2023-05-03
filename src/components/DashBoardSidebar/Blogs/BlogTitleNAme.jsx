import React, { useState } from "react";
import { useNavigate } from "react-router";
import { DeleteForeverOutlined, EditRounded } from "@mui/icons-material";

import axios from "axios";
import API_HOST from "../../../env";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "95vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",
    color: "#263238",
    border: "yellow !important",
  },
}));
export default function BlogTitleNAme({ data, index, setAllCtitle }) {
  const classes = useStyles();
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const navigate = useNavigate();
  const [titleuser, setTitleuser] = useState(data?.callToActionTitle);

  const handledeleteBlog = () => {
    axios
      .post(`${API_HOST}/callToActionTitle/removeTitle`, {
        titleId: data?.titleId,
      })
      .then(() => {
        axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
          setAllCtitle(res?.data?.success?.data);
          handleClose3()
        });
      });
  };

  const handleeditBlog = () => {
    axios
      .post(`${API_HOST}/callToActionTitle/editTitle`, {
        titleId: data?.titleId,
        callToActionTitle: titleuser,
      })
      .then(() => {
        axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
          setAllCtitle(res?.data?.success?.data);
          handleClose2();
        });
      });
  };

  return (
    <div>
      <div style={{ alignItems: "center" }} className="navoftableblogsdata">
        <div style={{ width: "5vw", cursor: "pointer" }}># {index + 1}</div>

        <div style={{ width: "70vw" }}>{data?.callToActionTitle}</div>

        <div style={{ width: "4vw" }}>
          <EditRounded
            onClick={() => {
              handleOpen2();
            }}
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ width: "4vw" }}>
          <DeleteForeverOutlined
            onClick={() => {
              handleOpen3();
            }}
            style={{
              margin: "0 0.5vw",
              width: "2vw ",
              height: "2vw",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
          />
        </div>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Edit Title Name</div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose2}
                    style={{ fontSize: "1.5vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />

            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
              <TextField
                id="outlined-basic"
                label="Title Name"
                value={titleuser}
                variant="outlined"
                style={{ width: "100%" }}
                InputLabelProps={{
                  style: {
                    fontSize: "1vw",
                    fontFamily: "Poppins",
                    fontStyle: "500",
                    fontWeight: "500",
                    color: "black",
                  },
                }}
                inputProps={{ className: classes.input }}
                onChange={(e) => {
                  setTitleuser(e.target.value);
                }}
              />
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
                onClick={handleClose2}
              >
                Cancel
              </div>
              <div
                onClick={() => handleeditBlog()}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Update
              </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Delete Title Name</div>
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
                Are you really want to delete '{data?.callToActionTitle}'
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
                onClick={() => handledeleteBlog()}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Delete
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
