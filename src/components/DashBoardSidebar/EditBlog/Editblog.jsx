import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddTableofContent1 from "./AddTableofContent1";
import Cataloguecarosel1 from "./CatalogCarosel1";
import img from "../../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img21 from "../../../assets/My profile – 28/Component 85 – 16 (1).svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import API_HOST from "../../../env";
import imageCompression from "browser-image-compression";
import TextEditor from "../AddBlog/Texteditor";
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
export default function Addblog({ width }) {
  const classes = useStyles();

  const [arrayofblogs, setArrayofblogs] = useState();
  const navigate = useNavigate();
  const [erroeshow, setErroeshow] = useState(false);
  const [title, setTitle] = useState("");
  const [imagetitle, setimagetitle] = useState("");
  const [imageTagAlt, setImageTagAlt] = useState("");
  const [metaTag, setMetaTag] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age3, setAge3] = React.useState(0);
  const handleChange3 = (event) => {
    setAge3(event.target.value);
  };
  const { Id } = useParams();
  const [arrayoffiles, setArrayoffiles] = useState([]);
  const [scate, setsCate] = useState("");
  const [allCtitle, setAllCtitle] = useState([]);
  const [allCbutton, setAllCbutton] = useState([]);
  const [data, setData] = useState();
  const [auther, setAuther] = useState("");
  useEffect(() => {
    axios
      ?.get(`${API_HOST}/contentManagement/viewcontent?contentId=${Id}`)
      .then((res) => {
        setData(res?.data?.success?.data[0]);
        setTitle(res?.data?.success?.data[0]?.contentName);
        setimagetitle(res?.data?.success?.data[0]?.iconTitle);
        setMetaTag(
          res?.data?.success?.data[0]?.slug
            ? res?.data?.success?.data[0]?.slug
            : " "
        );
        setMetaTitle(
          res?.data?.success?.data[0]?.metaTitle
            ? res?.data?.success?.data[0]?.metaTitle
            : " "
        );
        setMetaDescription(
          res?.data?.success?.data[0]?.metaDescription
            ? res?.data?.success?.data[0]?.metaDescription
            : " "
        );
        setImageTagAlt(res?.data?.success?.data[0]?.imageAltTag);
        setAuther(res?.data?.success?.data[0]?.author);
        setArrayofblogs(res?.data?.success?.data[0]?.toC);
        setAge3(
          res?.data?.success?.data[0]?.category === "Business Ideas"
            ? 1
            : res?.data?.success?.data[0]?.category === "Business Plans"
            ? 2
            : res?.data?.success?.data[0]?.category === "Business Problems"
            ? 3
            : 4
        );
        setsCate(
          res?.data?.success?.data[0]?.category === "Business Ideas"
            ? "Business Ideas"
            : res?.data?.success?.data[0]?.category === "Business Plans"
            ? "Business Plans"
            : res?.data?.success?.data[0]?.category === "Business Problems"
            ? "Business Problems"
            : "Others"
        );
        setArrayoffiles(res?.data?.success?.data[0]?.icon);
      });
  }, [Id]);

  const handlesumbitBlog = () => {
    const formdata = new FormData();

    formdata.append("contentName", title);
    formdata.append("category", scate);
    formdata.append("contentId", Id);
    formdata.append("iconTitle", imagetitle);
    formdata.append("imageAltTag", imageTagAlt);
    formdata.append("slug", metaTag);
    formdata.append("metaTitle", metaTitle);
    formdata.append("author", auther ? auther : "SMS");
    formdata.append("metaDescription", metaDescription);

    axios
      .post(`${API_HOST}/contentManagement/editcontent`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        const formdata = new FormData();

        formdata.append("toC", JSON.stringify(arrayofblogs));
        formdata.append("contentId", Id);

        axios
          .post(`${API_HOST}/contentManagement/editToC`, formdata, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          })
          .then((res) => {
            const formdata = new FormData();

            formdata.append("icon", JSON.stringify(arrayoffiles));
            formdata.append("contentId", Id);

            axios
              .post(`${API_HOST}/contentManagement/updateFile`, formdata, {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization:
                    "Bearer " + JSON.parse(localStorage.getItem("token")),
                },
              })
              .then((res) => {
                navigate(-1);
              });
          });
      });
  };

  const [erroraddblog, setErroraddblog] = useState(false);

  const handlecheck = () => {
    if (
      title &&
      imagetitle &&
      scate &&
      arrayoffiles?.length > 0 &&
      !erroraddblog &&
      imageTagAlt
    ) {
      handleOpen();
    } else {
      setErroraddblog(true);
    }
  };

  useEffect(() => {
    if (arrayofblogs?.length > 0) {
    } else {
      if (
        title &&
        imagetitle &&
        scate &&
        arrayoffiles?.length > 0 &&
        imageTagAlt
      ) {
        setErroraddblog(false);
      } else {
        setErroraddblog(true);
      }
    }
  }, [title, imagetitle, scate, arrayoffiles, arrayofblogs, imageTagAlt]);

  const handleuploadimage = (file) => {
    const formdata = new FormData();
    formdata.append("fileName", file);

    axios
      .post(`${API_HOST}/contentManagement/tableContent`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setArrayoffiles([...arrayoffiles, res?.data?.success?.data?.file]);
      });
  };

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
      await handleuploadimage(
        new File([compressedFile], `${compressedFile?.name}`)
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ height: "calc(100vh - 4vw)" }} className="ScrollTable">
      <div
        style={{
          width: "70vw",
          margin: "auto",
          height: "fit-content",
          marginTop: "2vw",
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
          <div className="jobpostedformheading">Edit Blogs (By Author)</div>

          <div className="jobpodtedfieldtitile">Blog Category *</div>
          <div className="">
            <Box
              sx={{
                background: "white",
                border: "1px solid #7070705b",
                height: "2.6vw",
                width: "64vw",
                borderRadius: "5px",
                margin: "0.5vw 1.5vw",
                padding: "0.2vw 0.2vw",
                marginLeft: "0vw",
              }}
              className="setting-toggler"
            >
              <FormControl variant="standard" fullWidth>
                <Select
                  className={classes.select2}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={age3}
                  disableUnderline
                  inputProps={{
                    classes: {
                      // root: classes.border,
                      icon: classes.icon,
                    },
                  }}
                  onChange={handleChange3}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "white",

                        "& .MuiMenuItem-root": {
                          padding: "0.1vw 2vw",
                          width: "100%",
                          height: "3vw",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "1vw",
                          lineHeight: "24px",
                          color: "#6b6b6b",
                        },
                      },
                    },
                  }}
                >
                  <MenuItem onClick={() => {}} value={0} hidden>
                    Select
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      setsCate("Business Ideas");
                    }}
                    value={1}
                  >
                    Business Ideas
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      setsCate("Business Plans");
                    }}
                    value={2}
                  >
                    Business Plans
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsCate("Business Problems");
                    }}
                    value={3}
                  >
                    Business Problems
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setsCate("Others");
                    }}
                    value={4}
                  >
                    Others
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <div className="jobpodtedfieldtitile">Blog Title *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                marginBottom: "0.0vw",
                marginLeft: "0.01vw",
                marginTop: "2vw",
              }}
              className="jobpodtedfieldtitile"
            >
              Cover Images *(upload images changes permanent )
            </div>
            <div
              style={{
                background: "white",
                padding: "0.51vw",
                marginTop: "0vw",
                paddingRight: "3vw",
              }}
            >
              <div className="inputfilebox">
                <div>
                  <label htmlFor="inputctaelogfile">
                    <div className="inputicon">
                      <img src={img} alt="" />
                    </div>
                    <div className="inputcateaddformfile">
                      Drag and Drop ,Browse to upload
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
              <div
                style={{
                  width: "100%",
                  textAlign: "right",
                  fontSize: "0.9vw",
                  fontWeight: "400",
                }}
              >
                Image should be less then 200 kb and Dimension should be in
                ratio (3:5)
              </div>
            </div>
            <div
              className={
                arrayoffiles?.length > 0 ? "inputfilesshowncatebox" : ""
              }
            >
              {arrayoffiles?.length > 0 &&
                arrayoffiles?.map((file, index) => {
                  return (
                    <div className="inputfilesshowncatboxsingle">
                      <div className="inputfilesshowncatboxsingleimg">
                        <img src={img1} alt="" />
                      </div>
                      <div className="fileselctednamecate">{file}</div>
                      <div className="inputfilesshowncatboxsingleimg">
                        <img
                          style={{
                            width: "1.5vw",
                            marginLeft: "1vw",
                            cursor: "pointer",
                          }}
                          src={img21}
                          alt=""
                          onClick={() => {
                            setArrayoffiles([
                              ...arrayoffiles.slice(0, index),
                              ...arrayoffiles.slice(
                                index + 1,
                                arrayoffiles.length
                              ),
                            ]);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
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
            <div className="jobpodtedfieldtitile mt-4">Image ALT TAG *</div>
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
            <div className="jobpodtedfieldtitile mt-4">Author *</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={auther}
                onChange={(e) => {
                  setAuther(e.target.value);
                }}
              />
            </div>
            <div
              style={{ textAlign: "left", fontSize: "1.4vw", marginTop: "1vw" }}
              className="jobpodtedfieldtitile"
            >
              Table of Content
            </div>
            {data &&
              arrayofblogs?.map((data, index) => {
                return (
                  <AddTableofContent1
                    setArrayofblogs={setArrayofblogs}
                    arrayofblogs={arrayofblogs}
                    data={data}
                    index={index}
                    setErroraddblog={setErroraddblog}
                    erroraddblog={erroraddblog}
                    title={title}
                    scate={scate}
                    arrayoffiles={arrayoffiles}
                    imagetitle={imagetitle}
                    allCbutton={allCbutton}
                    allCtitle={allCtitle}
                    imageTagAlt={imageTagAlt}
                  />
                );
              })}
            <div
              style={{ marginLeft: "1vw" }}
              className="addmoreservicecatalog"
              onClick={() => {
                setArrayofblogs([
                  ...arrayofblogs,
                  {
                    heading: " ",
                    toc: " ",

                    desc: " ",
                    title: "",
                    button: "",
                    buttonlink: "",
                  },
                ]);
              }}
            >
              <span>
                <AddIcon style={{ fontSize: "1.3vw" }} />
              </span>{" "}
              Add Paragraph
            </div>
            {erroeshow ? (
              <div
                style={{ color: "red", width: "fit-content" }}
                className="jobpodtedfieldtitile"
              >
                {" "}
                * Fill All the Fields
              </div>
            ) : (
              ""
            )}{" "}
            {erroraddblog && (
              <div
                style={{
                  marginLeft: "1vw",
                  color: "red",
                  width: "fit-content",
                }}
                className="min-maxhomejob"
              >
                fill all field are cumpulsary these are marked as *
              </div>
            )}
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle">Preview Blogs</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose}
                  style={{ fontSize: "1.5vw", cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          {arrayoffiles?.length > 0 && (
            <div style={{ padding: "0vw" }} className="Blogdbannercontainer">
              <div className="ctatlogcarouseltitle">
                <button
                  style={{
                    marginLeft: "1vw",
                    width: "10vw",
                    cursor: "auto",
                    position: "relative",
                    top: "4vw",
                    zIndex: "100",
                  }}
                  className="hb-button"
                >
                  {scate}
                </button>
                <div
                  className="textofcontainercatalgue"
                  dangerouslySetInnerHTML={{ __html: imagetitle }}
                ></div>
              </div>
              <div style={{ position: "relative", bottom: "2.2vw" }}>
                <Cataloguecarosel1
                  img1={arrayoffiles[0]}
                  img2={arrayoffiles[1] ? arrayoffiles[1] : arrayoffiles[1]}
                  img3={
                    arrayoffiles[2]
                      ? arrayoffiles[2]
                      : arrayoffiles[0]
                      ? arrayoffiles[0]
                      : arrayoffiles[1]
                  }
                  img4={
                    arrayoffiles[3]
                      ? arrayoffiles[3]
                      : arrayoffiles[1]
                      ? arrayoffiles[1]
                      : arrayoffiles[0]
                      ? arrayoffiles[0]
                      : arrayoffiles[2]
                  }
                />
              </div>
            </div>
          )}{" "}
          <hr style={{ margin: "0vw", height: "0vw" }} />
          <div style={{ position: "relative", bottom: "1vw" }}>
            <div className="jobpodtedfieldtitile"> Title</div>
            <div className="jobpostfieldinputbox">
              <input type="text" value={title} disabled />
            </div>
            <div className="jobpodtedfieldtitile"> Category</div>
            <div className="jobpostfieldinputbox">
              <input type="text" value={scate} disabled />
            </div>

            <div className="jobpodtedfieldtitile"> Table of Content</div>

            <div className="widthfullblofpreview">
              {arrayofblogs?.length > 0 &&
                arrayofblogs?.map((data, index) => {
                  return (
                    <div>
                      <div
                        className="dataeofblogcontnet1"
                        style={{
                          color: "black",
                          fontWeight: "500",
                          fontSize: "1.5vw",
                          lineHeight: "2vw",
                          marginBottom: "0.51vw",
                        }}
                      >
                        {data?.heading}
                      </div>
                      <div
                        className="dataeofblogcontnet1"
                        style={{ color: "black", fontSize: "0.9vw" }}
                        dangerouslySetInnerHTML={{ __html: data?.toc }}
                      ></div>

                      {data?.title && (
                        <div
                          style={{ width: "63vw" }}
                          className="Joinwithusblogbox"
                        >
                          <div style={{ width: "60%", textAlign: "center" }}>
                            <div className="Joinwithusblogboxtitle">
                              {data?.title}
                            </div>
                            <div
                              className="Joinwithusblogboxdetail"
                              dangerouslySetInnerHTML={{
                                __html: data?.desc,
                              }}
                            ></div>
                          </div>
                          <div style={{ width: "40%", textAlign: "center" }}>
                            {data?.button && <button> {data?.button}</button>}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
              <div
                onClick={() => {
                  handleClose();
                }}
                style={{
                  background: "white",
                  color: "black",
                  cursor: "pointer",
                }}
                className="handlecirclieaboutsave"
              >
                Cancel
              </div>
              <div
                onClick={() => {
                  handlesumbitBlog();
                }}
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
              >
                Update
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
