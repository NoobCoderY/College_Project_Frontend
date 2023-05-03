import React, { useEffect, useState } from "react";

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
export default function AddTableofContent({
  setArrayofblogs,
  arrayofblogs,
  data,
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
  const [description1, setDescription1] = useState("");
  const classes = useStyles();
  const [age4, setAge4] = React.useState(10);
  const [age5, setAge5] = React.useState(10);
  const [heading1, setHeading1] = useState(data?.heading);
  const [buttonDesc1, setButtonDesc1] = useState("");
  const [buttonlink, setButtonlink] = useState("");

  const handleChange4x = (event) => {
    setAge4(event.target.value);
  };
  const handleChange5x = (event) => {
    setAge5(event.target.value);
  };
  const [wrongsec, setwrongsec] = useState(false);

  useEffect(() => {
    setArrayofblogs({
      heading: heading1,
      toc: description1,
      desc: buttonDesc1,
      title: data?.title,
      button: data?.button,
      buttonlink: buttonlink,
    });
  }, [description1, heading1, buttonDesc1, buttonlink]);

  useEffect(() => {
    setwrongsec(false);
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
  }, [data, title, scate, arrayoffiles, imagetitle, arrayofblogs, imageTagAlt]);

  useEffect(() => {
    setHeading1(data?.heading);
    setButtonDesc1(data?.desc);
    setDescription1(data?.toc);
    setAge4(data?.title ? data?.title : 10);
    setAge5(data?.button ? data?.button : 10);
    setButtonlink(data?.buttonlink);
    setShowcallofaction(data?.title ? true : false);
  }, []);

  const [showcallofaction, setShowcallofaction] = useState(false);

  return (
    <>
      {
        <div style={{ marginTop: "1vw" }}>
          <div className="jobpodtedfieldtitile"> Table of Content </div>

          <div style={{ marginBottom: "2vw", width: "96%" }}>
            <TextEditor
              width={"65vw"}
              setDescription1={setHeading1}
              description1={heading1}
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
          {!showcallofaction ? (
            <div
              className="addmoreservicecatalog"
              onClick={() => {
                setShowcallofaction(true);
              }}
              style={{ marginBottom: "1vw" }}
            >
              Add Call of Action
            </div>
          ) : (
            <div
              className="addmoreservicecatalog"
              onClick={() => {
                setShowcallofaction(false);
                setArrayofblogs({
                    heading: data?.heading,
                    toc: data?.toc,
                    file: data?.file,
                    desc: data?.desc,
                    title: "",
                    button: '',
                  });

                  setAge4(10)
                  setAge5(10)
              }}
              style={{ color: "red", marginBottom: "1vw" }}
            >
              Remove Call of Action
            </div>
          )}

          {showcallofaction && (
            <div>
              <div className="jobpodtedfieldtitile">Call to Action</div>
              <div
                style={{ justifyContent: "space-between", width: "90%" }}
                className="homjobpost-popbudegt"
              >
                <div>
                  <div
                    style={{ width: "fit-content" }}
                    className="jobpodtedfieldtitile"
                  >
                    Title Name{" "}
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
                          value={age4}
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
                              setArrayofblogs({
                                heading: data?.heading,
                                toc: data?.toc,
                                file: data?.file,
                                desc: data?.desc,
                                title: "",
                                button: data?.button,
                              });
                            }}
                            value={10}
                          >
                            None
                          </MenuItem>
                          {allCtitle?.length > 0 &&
                            allCtitle?.map((data1) => {
                              return (
                                <MenuItem
                                  onClick={() => {
                                    setArrayofblogs({
                                      heading: data?.heading,
                                      toc: data?.toc,
                                      file: data?.file,
                                      desc: data?.desc,
                                      title: data1?.callToActionTitle,
                                      button: data?.button,
                                    });
                                  }}
                                  value={data1?.callToActionTitle}
                                >
                                  {data1?.callToActionTitle}
                                </MenuItem>
                              );
                            })}
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
                  setDescription1={setButtonDesc1}
                  description1={buttonDesc1}
                />
              </div>
              <div>
                <div
                  style={{ marginLeft: "0.2vw", width: "fit-content" }}
                  className="jobpodtedfieldtitile"
                >
                  Button Name
                </div>
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
                        value={age5}
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
                            setArrayofblogs({
                              toc: data?.toc,
                              file: data?.file,
                              desc: data?.desc,
                              title: data?.title,
                              button: "",
                            });
                          }}
                          value={10}
                        >
                          None
                        </MenuItem>
                        {allCbutton?.length > 0 &&
                          allCbutton?.map((data1) => {
                            return (
                              <MenuItem
                                onClick={() => {
                                  setArrayofblogs({
                                    heading: data?.heading,
                                    toc: data?.toc,
                                    file: data?.file,
                                    desc: data?.desc,
                                    title: data?.title,
                                    button: data1?.callToActionButton,
                                  });
                                }}
                                value={data1?.callToActionButton}
                              >
                                {data1?.callToActionButton}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </Box>
                </div>
              </div>
              <div className="jobpodtedfieldtitile">Button Link </div>
              <div className="jobpostfieldinputbox">
                <input
                  type="text"
                  value={buttonlink}
                  onChange={(e) => {
                    setButtonlink(e.target.value);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      }
    </>
  );
}
