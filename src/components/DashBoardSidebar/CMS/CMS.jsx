import React, { useEffect, useState } from "react";
import img3 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import { makeStyles } from "@material-ui/core";
import img1 from "../../../assets/My profile – 28/Component 70 – 6.svg";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

import API_HOST from "../../../env";
import axios from "axios";
import imageCompression from "browser-image-compression";
import CmsCard from "./CmsCard";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "48vw",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 2,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
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
export default function CMS() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const width = 1000;

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

  const [errorp, setErrorp] = useState("");
  const [certificated, setcertificated] = useState([]);

  const handleaddcertificate = () => {
    if (!iamge) {
      setErrorp("Image is compulsory");
      return;
    }

    const formdata = new FormData();

    formdata.append("link", callagename);

    if (iamge) {
      formdata.append("image", iamge);
    }

    axios
      .post(`${API_HOST}/highlights/addHighlights`, formdata, {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        axios.get(`${API_HOST}/highlights/viewhighlights`).then((res) => {
          setcertificated(res?.data?.success?.data);
          handleClose();
        });
      });
  };
  const [iamge, setIamge] = useState();
  const [callagename, setcallagename] = useState("");

  const [recall, setRecall] = useState(true);

  useEffect(() => {
    axios.get(`${API_HOST}/highlights/viewhighlights`).then((res) => {
      setcertificated(res?.data?.success?.data);
    });
  }, [recall]);

  return (
    <div style={{ height: "calc( 100vh - 4vw)" }} className="ScrollTable">
      <div style={{ height: "fit-content" }} className="Dashbaorddataboxes">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="profiledetailstitle"
        >
          Highlights
          <div
            onClick={handleOpen}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              width: "fit-content",
            }}
            className="profiledetailnavmanu"
          >
            <img style={{ width: "2.5vw" }} src={img1} alt="" />
            Add
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={width > 700 ? style : style1}>
            <div style={{ maxHeight: "90vh", overflowY: "scroll" }}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Add Highlight</div>
                <div className="profiledetailnavmanu">
                  <CloseIcon
                    onClick={handleClose}
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
              {iamge ? (
                <div className="inputfilesshowncatboxsingle">
                  <div className="inputfilesshowncatboxsingleimg">
                    <img
                      style={{ width: width > 700 ? "" : "5vw" }}
                      src={img3}
                      alt=""
                    />
                  </div>
                  <div className="fileselctednamecate">
                    {iamge?.name.slice(0, 50)}
                  </div>
                </div>
              ) : (
                ""
              )}

              <p
                style={{
                  color: "red",
                  fontSize: width > 700 ? "0.9vw" : "2.5vw",
                  lineHeight: "2vw",
                }}
              >
                {errorp}
              </p>

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
                  onClick={handleaddcertificate}
                >
                  SAVE
                </div>
              </div>
            </div>
          </Box>
        </Modal>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          className="DashbaordBoxes"
        >
          {certificated?.map((data) => {
            return (
              <CmsCard
                setcertificated={setcertificated}
                data={data}
                recall={recall}
                setRecall={setRecall}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
