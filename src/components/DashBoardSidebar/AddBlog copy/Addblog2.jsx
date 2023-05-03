import React, { useEffect, useState } from "react";
import './BiddingFormDashboard.css'
import { useNavigate } from "react-router";


import { makeStyles } from "@material-ui/core";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";
import imageCompression from "browser-image-compression";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "50vw",
  maxHeight: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  overflowY: "scroll",
  boxShadow: 24,
  p: "2vw",
};

const useStyles = makeStyles((theme) => ({
  select: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
  },
  select2: {
    height: "1vw",
    width: "100%",
    padding: "1vw 0.5vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
  },
  select3: {
    height: "1vw",
    width: "100%",
    marginTop: "0.1vw",
    padding: "0vw 0vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.51vw",
    lineHeight: "100%",
    position: "relative",
    top: "0.81vw",
    left: "0.2vw",
  },
  icon: {
    fill: "black",
  },
}));
export default function Addblog2({ width }) {
  const classes = useStyles();
  const { user } = useSelector((state) => state.user);

  const [arrayofblogs, setArrayofblogs] = useState({
    heading: "",
    toc: "",
    desc: "",
    title: "",
    button: "",
    buttonlink: "",
  });
  const navigate = useNavigate();
  const [erroeshow, setErroeshow] = useState(false);
  const [title, setTitle] = useState("");
  const [imagetitle, setimagetitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const [imageTagAlt, setImageTagAlt] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age3, setAge3] = React.useState(0);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [scate, setsCate] = useState("");

  const handlesumbitBlog = () => {
    const formdata = new FormData();

    if (arrayoffiles?.length > 0) {
      arrayoffiles?.map((data) => {
        formdata.append("fileName", data);
      });
    }
    formdata.append("status", "publish");
    formdata.append("type1", false);
    formdata.append("type2", true);
    formdata.append("contentName", title);
    formdata.append("author", auther ? auther : "SMS");
    formdata.append("shareDisable", false);
    formdata.append("toC", JSON.stringify(arrayofblogs));
    formdata.append("category", scate);
    formdata.append("iconTitle", imagetitle);
    formdata.append("imageAltTag", imageTagAlt);
    formdata.append("slug", metaTag);
    formdata.append("metaTitle", metaTitle);
    formdata.append("metaDescription", metaDescription);

    axios
      .post(`${API_HOST}/contentManagement/addByAdmin`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => {
        setFirstsumbitblog(false);
      });
  };

  const [erroraddblog, setErroraddblog] = useState(false);

  const handlecheck = () => {
    if (
      title &&
      imagetitle &&
      scate &&
      imageTagAlt &&
      arrayoffiles?.length > 0 &&
      !erroraddblog
    ) {
      handleOpen();
    } else {
      setErroraddblog(true);
    }
  };

  useEffect(() => {
    if (arrayofblogs?.length > 0) {
    } else {
      if (title && imagetitle && scate && arrayoffiles?.length > 0) {
        setErroraddblog(false);
      } else {
        setErroraddblog(true);
      }
    }
  }, [title, scate, arrayoffiles, arrayofblogs, imagetitle]);

  const [firstsumbitblog, setFirstsumbitblog] = useState(false);

  const [allCtitle, setAllCtitle] = useState([]);
  const [allCbutton, setAllCbutton] = useState([]);

  useEffect(() => {
    axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
      setAllCtitle(res?.data?.success?.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${API_HOST}/callToActionButton/viewButton`).then((res) => {
      setAllCbutton(res?.data?.success?.data);
    });
  }, []);

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
      await setArrayoffiles([
        ...arrayoffiles,
        new File([compressedFile], `${compressedFile?.name}`),
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  const [auther, setAuther] = useState("");

  return (
    <div style={{ height: "calc(100vh - 4vw)" }} className="ScrollTable">
      <div
        style={{
          width: "70vw",
          margin: "auto",
          height: "fit-content",
          marginTop: "2vw",
          marginBottom: "2vw",
        }}
        className="home-postjob-container"
      >
        <div
          style={{
            overflowX: "hidden",
            paddingLeft: "4vw",
            width: "70vw",
            paddingTop: "2vw",
          }}
          className="homepostjob-right"
        >
          <div className="jobpostedformheading">Add Bin </div>

          <div>
            <div className="jobpodtedfieldtitile mt-2"> Blog Title *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile"> Image Title *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={imagetitle}
                onChange={(e) => {
                  setimagetitle(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile ">Image ALT TAG *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={imageTagAlt}
                onChange={(e) => {
                  setImageTagAlt(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile mt-4">META TAG *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={metaTag}
                onChange={(e) => {
                  setMetaTag(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile">META TITLE *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => {
                  setMetaTitle(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile">META DESCRIPTION *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={metaDescription}
                onChange={(e) => {
                  setMetaDescription(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile">Author </div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={auther}
                onChange={(e) => {
                  setAuther(e.target.value);
                }}
              />
            </div>
         
            <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
              <button
                style={{ background: "white" }}
                onClick={() => {
                  navigate(-1);
                }}
              >
                Cancel
              </button>

              <button onClick={handlecheck} style={{ color: "white" }}>
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
