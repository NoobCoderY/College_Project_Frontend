import React, { useEffect, useState } from "react";
import "./cms.css";

import { useNavigate } from "react-router";
import img2 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import edit_logo from "../../../assets/My profile – 28/edit_logo.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";
import API_HOST from "../../../env";
import img3 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import { makeStyles } from "@material-ui/core";

import { TextField } from "@mui/material";
import imageCompression from "browser-image-compression";

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

export default function CmsCard({ data, recall, setRecall, setcertificated }) {
  const width = 900;
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const deleltecatalogue = () => {
    axios
      .post(
        `${API_HOST}/highlights/removeHighlights`,
        {
          highlightsId: data?.highlightsId,
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
  async function handleImageUpload(event) {
    const imageFile = event.target.files[0];
    console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(
        "compressedFile instanceof Blob",
        compressedFile instanceof Blob
      ); // true
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      ); // smaller than maxSizeMB

      //   await uploadToServer(compressedFile); // write your own logic
      await setIamge(new File([compressedFile], `${compressedFile?.name}`));
    } catch (error) {
      console.log(error);
    }
  }
  const [iamge, setIamge] = useState();
  const [callagename, setcallagename] = useState("");

  useEffect(() => {
    setcallagename(data?.link);
  }, [data]);

  const handleaddcertificate = () => {
    const formdata = new FormData();

    formdata.append("highlightsId", data?.highlightsId);
    formdata.append("link", callagename);

    if (iamge) {
      formdata.append("image", iamge);
    }

    axios
      .post(`${API_HOST}/highlights/editHighlights`, formdata, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        axios.get(`${API_HOST}/highlights/viewhighlights`).then((res) => {
          setcertificated(res?.data?.success?.data);
          handleClose1();
        });
      });
  };
  return (
    <div className="cmscard">
      <div>
        <img
          style={{
            height: "16vw",
            objectFit: "contain",
            width: "fit-contain",
            borderRadius: "1vw",
          }}
          src={data?.image}
          alt=""
        />
        <div
          style={{
            height: "16vw",
            position: "relative",
            bottom: "16vw",
            borderRadius: "1vw",
            display: "flex",
          }}
          className="pportimg2"
        >
          <div
            style={{ width: "fit-content", display: "flex" }}
            className="porfolioprofilemenu"
          >
            <div onClick={handleOpen1} className="porfolioprofilemenu">
              <img src={edit_logo} alt="" />
            </div>

            <div onClick={handleOpen} className="porfolioprofilemenu">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>

        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div style={{ maxHeight: "90vh", overflowY: "scroll" }}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Edit Highlight</div>
                <div className="profiledetailnavmanu">
                  <CloseIcon
                    onClick={handleClose1}
                    style={{
                      fontSize: width > 700 ? "1.5vw" : "4vw",
                      position: "relative",
                      right: "1vw",
                    }}
                  />
                </div>
              </div>
              <hr style={{ color: "#000000" }} />
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <TextField
                  id="outlined-basic"
                  label="Rediect Link"
                  variant="outlined"
                  value={callagename}
                  style={{ width: "100%" }}
                  InputLabelProps={{
                    style: {
                      fontSize: width > 700 ? "1vw" : "3vw",
                      fontFamily: "Poppins",
                      fontStyle: "500",
                      fontWeight: "500",
                      color: "black",
                    },
                  }}
                  inputProps={{ className: classes.input }}
                  onChange={(e) => setcallagename(e.target.value)}
                />
              </div>

              <div
                style={{
                  width: width > 700 ? "99%" : "99%",
                  height: width > 700 ? "10vw" : "20vw",
                }}
                className="inputfilebox"
              >
                <div>
                  <label htmlFor="inputctaelogfile">
                    <div className="inputicon">
                      <img src={img} alt="" />
                    </div>
                    <div className="inputcateaddformfile">
                      Drag and Drop ,Browse to upload Banner Image
                    </div>
                    <input
                      type="file"
                      id="inputctaelogfile"
                      onChange={(e) => {
                        handleImageUpload(e);
                      }}
                      hidden
                    />
                  </label>
                </div>
              </div>

              <div className="inputfilesshowncatboxsingle">
                <div className="inputfilesshowncatboxsingleimg">
                  <img
                    style={{ width: width > 700 ? "" : "5vw" }}
                    src={img3}
                    alt=""
                  />
                </div>
                <div className="fileselctednamecate">
                  {iamge ? iamge?.name.slice(0, 50) : data?.image}
                </div>
              </div>

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
                  onClick={handleClose1}
                >
                  Cancel
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  className="handlecirclieaboutsave"
                  onClick={handleaddcertificate}
                >
                  SAVE
                </div>
              </div>
            </div>
          </Box>
        </Modal>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle"> Delete Highlight</div>
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
              The action will delete this highlight From Highlights.
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
              Are you sure you want to delete this Highlight?
            </div>
            <hr style={{ color: "#000000" }} />
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
    </div>
  );
}
