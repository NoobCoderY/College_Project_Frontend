import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";

import TextEditor from "../BiddingForm/Texteditor";

const useStyles = makeStyles((theme) => ({
  select: {
    height: "2.5vw",
    width: "100%",
    marginTop: "0.2vw",
    padding: "1vw",
    marginLeft: "0vw",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "1vw",
    lineHeight: "120%",
    color: "black",
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
export default function AddTableofContent1({
  setArrayofblogs,
  arrayofblogs,
  data,
  index,
  setErroraddblog,
  erroraddblog,
  title,
  scate,
  arrayoffiles,
  imagetitle,
  allCbutton,
  allCtitle,
  imageTagAlt,
}) {
  const [description1, setDescription1] = useState(data.toc);
  const [buttonlink, setbuttonlink] = useState(data.buttonlink);

  const [heading1, setHeading1] = useState(data.heading);
  const [desc1, setDesc1] = useState(data.desc);
  const classes = useStyles();
  const [age4, setAge4] = React.useState(10);
  const [age5, setAge5] = React.useState(10);

  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };

  useEffect(() => {
    setArrayofblogs([
      ...arrayofblogs.slice(0, index),
      {
        heading: heading1,
        toc: description1,

        desc: desc1,
        title: data?.title,
        button: data?.button,
        buttonlink: buttonlink,
      },
      ...arrayofblogs.slice(index + 1, arrayofblogs.length),
    ]);
  }, [description1, heading1, desc1, buttonlink]);

  useEffect(() => {
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
  }, [data, title, scate, arrayoffiles, imagetitle, imageTagAlt]);

  useEffect(() => {
    setHeading1(data?.heading);
    setDesc1(data?.desc);
    setDescription1(data?.toc);
    setAge4(data?.title ? data?.title : 10);
    setAge5(data?.button ? data?.button : 10);
    setbuttonlink(data?.buttonlink);
  }, []);

  return (
    <>
      {
        <div>
          <div
            style={{
              marginBottom: "1vw",
              display: "flex",
              justifyContent: "space-between",
            }}
            className="jobpodtedfieldtitile"
          >
            <div style={{ fontSize: "1.2vw" }}> Paragraph {index + 1} </div>
            {arrayofblogs?.length > 1 && (
              <div>
                <CloseIcon
                  style={{
                    position: "relative",
                    right: "1vw",
                    fontSize: "2vw",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setArrayofblogs([
                      ...arrayofblogs?.slice(0, index),
                      ...arrayofblogs?.slice(index + 1, arrayofblogs?.length),
                    ]);
                  }}
                />
              </div>
            )}
          </div>
          <div className="jobpodtedfieldtitile"> Paragraph heading </div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              value={heading1}
              onChange={(e) => {
                setHeading1(e.target.value);
              }}
            />
          </div>

          <div className="jobpodtedfieldtitile"> Paragraph Description </div>
          <div style={{ marginBottom: "2vw", width: "96%" }}>
            <TextEditor
              width={"65vw"}
              setDescription1={setDescription1}
              description1={description1}
            />
          </div>

          <div className="jobpodtedfieldtitile">Call to Action</div>
          <div className="homjobpost-popbudegt">
            <div>
              <div className="jobpodtedfieldtitile">Title Name</div>
              <div className="">
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #7070705b",
                    height: "2.6vw",
                    width: "65vw",
                    borderRadius: "5px",
                    margin: "0.2vw",
                    padding: "0.2vw 0.2vw",
                  }}
                  className="setting-toggler"
                >
                  <FormControl variant="standard" fullWidth>
                    <Select
                      className={classes.select2}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={allCtitle?.length > 0 ? age4 : 10}
                      disableUnderline
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                        },
                      }}
                      onChange={handleChange4x}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: "white",

                            "& .MuiMenuItem-root": {
                              padding: "0.1vw 2vw",
                              width: "100%",
                              height: "2vw",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "0.91vw",
                              lineHeight: "24px",
                              color: "#6b6b6b",
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem  
                              onClick={() => {
                                setArrayofblogs([
                                  ...arrayofblogs.slice(0, index),
                                  {
                                    heading: data?.heading,
                                    toc: data?.toc,
                                    file: data?.file,
                                    desc: data?.desc,
                                    title: '',
                                    button: data?.button,
                                  },
                                  ...arrayofblogs.slice(
                                    index + 1,
                                    arrayofblogs.length
                                  ),
                                ]);
                              }}  value={10}>
                        None
                      </MenuItem>
                      {allCtitle?.length > 0 &&
                        allCtitle?.map((data1) => {
                          return (
                            <MenuItem
                              onClick={() => {
                                setArrayofblogs([
                                  ...arrayofblogs.slice(0, index),
                                  {
                                    heading: data?.heading,
                                    toc: data?.toc,
                                    file: data?.file,
                                    desc: data?.desc,
                                    title: data1?.callToActionTitle,
                                    button: data?.button,
                                  },
                                  ...arrayofblogs.slice(
                                    index + 1,
                                    arrayofblogs.length
                                  ),
                                ]);
                              }}
                              value={data1?.callToActionTitle}
                            >
                              {data1?.callToActionTitle}
                            </MenuItem>
                          );
                        })}{" "}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
          <div className="jobpodtedfieldtitile">Button Description </div>
          <div style={{ marginBottom: "2vw", width: "96%" }}>
            <TextEditor
              width={"64vw"}
              setDescription1={setDesc1}
              description1={desc1}
            />
          </div>
          <div className="homjobpost-popbudegt">
            <div>
              <div
                style={{ width: "fit-content" }}
                className="jobpodtedfieldtitile"
              >
                Button Name *
              </div>
              <div className="">
                <Box
                  sx={{
                    background: "white",
                    border: "1px solid #7070705b",
                    height: "2.6vw",
                    width: "65vw",
                    borderRadius: "5px",
                    margin: "0.2vw ",
                    padding: "0.2vw 0.2vw",
                  }}
                  className="setting-toggler"
                >
                  <FormControl variant="standard" fullWidth>
                    <Select
                      className={classes.select2}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={allCbutton?.length > 0 ? age5 : 10}
                      disableUnderline
                      inputProps={{
                        classes: {
                          icon: classes.icon,
                        },
                      }}
                      onChange={handleChange5x}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: "white",
                            "& .MuiMenuItem-root": {
                              padding: "0.1vw 2vw",
                              width: "100%",
                              height: "2vw",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "500",
                              fontSize: "0.91vw",
                              lineHeight: "24px",
                              color: "#6b6b6b",
                            },
                          },
                        },
                      }}
                    >
                      <MenuItem
                   
                        onClick={() => {
                          setArrayofblogs([
                            ...arrayofblogs.slice(0, index),
                            {
                              heading: data?.heading,
                              toc: data?.toc,
                              file: data?.file,
                              desc: data?.desc,
                              title: data?.title,
                              button: "",
                            },
                            ...arrayofblogs.slice(
                              index + 1,
                              arrayofblogs.length
                            ),
                          ]);
                        }}
                        value={10}
                      >
                        None
                      </MenuItem>
                      {allCbutton?.length > 0 &&
                        age4 &&
                        allCbutton?.map((data1) => {
                          return (
                            <MenuItem
                              onClick={() => {
                                setArrayofblogs([
                                  ...arrayofblogs.slice(0, index),
                                  {
                                    heading: data?.heading,
                                    toc: data?.toc,
                                    file: data?.file,
                                    desc: data?.desc,
                                    title: data?.title,
                                    button: data1?.callToActionButton,
                                  },
                                  ...arrayofblogs.slice(
                                    index + 1,
                                    arrayofblogs.length
                                  ),
                                ]);
                              }}
                              value={data1?.callToActionButton}
                            >
                              {data1?.callToActionButton}
                            </MenuItem>
                          );
                        })}{" "}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </div>
          <div className="jobpodtedfieldtitile">Button Link </div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              value={buttonlink}
              onChange={(e) => {
                setbuttonlink(e.target.value);
              }}
            />
          </div>
        </div>
      }
    </>
  );
}
