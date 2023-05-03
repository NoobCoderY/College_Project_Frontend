import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import Skillpopup1 from "./Skillpopup";
import BlogButtonName from "./BlogButtonName";
import BlogTitleNAme from "./BlogTitleNAme";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const style1 = {
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

export default function Blogs() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalpages, settotalpages] = useState(1);
  const [setSelectedCategory, setSetSelectedCategory] = useState("");
  const [arrayoffilters, setArrayoffilters] = useState([
    {
      filternameName: "Categories",
      filters: [
        "Business Ideas",
        "Business Plans",
        "Business Problems",
        "Others",
      ],
    },
  ]);

  const [arrayoffilterselected, setarrayoffilterselected] = useState([
    "Business Ideas",
    "Business Plans",
    "Business Problems",
    "Others",
  ]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [previosfilter, setPreviosfilter] = useState([]);
  const [previosfilter1, setPreviosfilter1] = useState([]);
  const [allusers, setAllusers] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/contentManagement/forAdminContent?contentName=${setSelectedCategory}&pageNumber=${page}&pageSize=10&category=${JSON.stringify(
          arrayoffilterselected
        )}`,
        {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
      )
      .then((res) => {
        setAllusers(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
  }, [page, setSelectedCategory, arrayoffilterselected]);

  const [togglrbar, setTogglrbar] = useState(1);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [titleuser, setTitleuser] = useState("");
  const [titleuser1, setTitleuser1] = useState("");
  const classes = useStyles();
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

  const handleaddButtonName = () => {
    axios
      .post(`${API_HOST}/callToActionButton/addButton`, {
        callToActionButton: titleuser1,
      })
      .then(() => {
        axios.get(`${API_HOST}/callToActionButton/viewButton`).then((res) => {
          setAllCbutton(res?.data?.success?.data);
          handleClose3();
          setTitleuser1("");
        });
      });
  };
  const handleaddTitleName = () => {
    if (titleuser) {
      axios
        .post(`${API_HOST}/callToActionTitle/addTitle`, {
          callToActionTitle: titleuser,
        })
        .then(() => {
          axios.get(`${API_HOST}/callToActionTitle/viewTitle`).then((res) => {
            setAllCtitle(res?.data?.success?.data);
            handleClose2();
            setTitleuser("");
          });
        });
    }
  };

  return (
    <div className="BrowseWorkMain-cntainer">
      <div className="searchboxcontainer">
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input
            type="text"
            placeholder="search Blogs"
            value={setSelectedCategory}
            onChange={(e) => {
              setSetSelectedCategory(e.target.value);
            }}
          />
          <button
            style={{ width: "11vw", height: "2.6vw" }}
            className="hb-button"
          >
            Search
          </button>
        </div>

        <div
          style={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ flexWrap: "wrap" }} className="filterboxflex">
              <div
                onClick={() => {
                  handleOpen();
                  setPreviosfilter([...arrayoffilterselected]);
                  setPreviosfilter1([...arrayoffilterselected]);
                }}
                className="filtericonbox"
              >
                <img src={imgfilter} alt="" /> Filter
              </div>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style1}>
                  <div className="profiletitleandmenunav">
                    <div className="profiledetailstitle">Add Filters</div>
                    <div className="profiledetailnavmanu">
                      <div>
                        <CloseIcon
                          onClick={handleClose}
                          style={{ fontSize: "1.5vw" }}
                        />
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#00000090" }} />

                  {arrayoffilters?.map((data, index) => {
                    return (
                      <div>
                        <div
                          style={{ fontSize: "1.2vw" }}
                          className="profiledetailstitle"
                        >
                          {data?.filternameName}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          {data?.filters?.map((data1, index) => {
                            return (
                              <div
                                onClick={() => {
                                  if (previosfilter1.indexOf(data1) > -1) {
                                    setPreviosfilter1([
                                      ...previosfilter1.slice(
                                        0,
                                        previosfilter1.indexOf(data1)
                                      ),
                                      ...previosfilter1.slice(
                                        previosfilter1.indexOf(data1) + 1,
                                        previosfilter1.length
                                      ),
                                    ]);
                                  } else {
                                    setPreviosfilter1([
                                      ...previosfilter1,
                                      data1,
                                    ]);
                                  }
                                }}
                                style={{
                                  background: previosfilter1.includes(data1)
                                    ? "#0052CC20"
                                    : "",
                                  cursor: "pointer",
                                }}
                                className="filterboxnameskill"
                              >
                                {data1}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}

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
                      onClick={() => {
                        setarrayoffilterselected(previosfilter);
                        handleClose();
                      }}
                    >
                      Cancel
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      className="handlecirclieaboutsave"
                      onClick={() => {
                        setarrayoffilterselected(previosfilter1);
                        handleClose();
                      }}
                    >
                      Submit
                    </div>
                  </div>
                </Box>
              </Modal>

              <div
                onClick={() =>
                  setarrayoffilterselected([
                    "Business Ideas",
                    "Business Plans",
                    "Business Problems",
                    "Others",
                  ])
                }
                style={{ cursor: "pointer" }}
                className="filtericonboxname"
              >
                Clear all
              </div>
            </div>
          </div>
        </div>

        {togglrbar === 1 && (
          <div
            onClick={() => {
              navigate("/dashbaord/addBlog");
            }}
            className="digitalwallate"
          >
            <span style={{ color: "#0052CC" }}>Add New Blog</span>
          </div>
        )}
        {togglrbar === 2 && (
          <div
            onClick={() => {
              handleOpen2();
            }}
            className="digitalwallate"
          >
            <span style={{ color: "#0052CC" }}>Add New Title</span>
          </div>
        )}
        {togglrbar === 3 && (
          <div
            onClick={() => {
              handleOpen3();
            }}
            className="digitalwallate"
          >
            <span style={{ color: "#0052CC" }}>Add New Button</span>
          </div>
        )}
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle">Add Title Name</div>
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
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
                onClick={() => {
                  handleaddTitleName();
                }}
              >
                Add
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
              <div className="profiledetailstitle">Add Button Name</div>
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
              <TextField
                id="outlined-basic"
                label="Button Name"
                value={titleuser1}
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
                  setTitleuser1(e.target.value);
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
                onClick={handleClose3}
              >
                Cancel
              </div>
              <div
                style={{ cursor: "pointer" }}
                className="handlecirclieaboutsave"
                onClick={() => {
                  handleaddButtonName();
                }}
              >
                Add
              </div>
            </div>
          </Box>
        </Modal>
      </div>

      <div className="ScrollTable">
        <div
          style={{ position: "relative", right: "1vw", top: "0vw" }}
          className="profileworkhistruytoggleer"
        >
          <div
            onClick={() => {
              setTogglrbar(1);
            }}
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              width: "8vw",
            }}
          >
            List of Blogs
          </div>
          <div
            onClick={() => {
              setTogglrbar(2);
            }}
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              width: "11vw",
            }}
          >
            Call to Action Title
          </div>
          <div
            onClick={() => {
              setTogglrbar(3);
            }}
            className="profileworkhistruytoggleervalue"
            style={{
              textAlign: "center",
              width: "13vw",
            }}
          >
            Call to Action Button
          </div>

          <div
            style={{
              color: "#0052CC",
              borderBottom: "0.3vw solid #0052CC",
              width: "9vw",
              position: "relative",
              right:
                togglrbar === 1
                  ? "37.5vw"
                  : togglrbar === 2
                  ? "26vw"
                  : "12.5vw",
              bottom: "0.0vw",
              transitionDuration: "1s",
              borderRadius: "0.2vw",
            }}
          ></div>
        </div>

        {togglrbar === 1 && (
          <div>
            <div
              style={{ margin: "1vw", padding: "0vw 1vw", marginTop: "2vw" }}
              className="navoftableblogs"
            >
              <div style={{ width: "4vw" }}>Id</div>
              <div style={{ width: "19.5vw" }}>Title</div>
              <div style={{ width: "8.5vw" }}>Type</div>
              <div style={{ width: "10vw" }}>Category</div>
              <div style={{ width: "10vw" }}>Created by</div>

              <div style={{ width: "7vw" }}>Status</div>
              <div style={{ width: "4vw" }}>Views</div>
              <div style={{ width: "12vw" }}> </div>

              <div style={{ width: "3vw" }}></div>
            </div>
            {allusers?.length > 0 &&
              allusers?.map((data, index) => {
                return (
                  <Skillpopup1
                    data={data}
                    index={index}
                    page={page}
                    setAllusers={setAllusers}
                    settotalpages={settotalpages}
                    setSelectedCategory={setSelectedCategory}
                    arrayoffilterselected={arrayoffilterselected}
                  />
                );
              })}

            <div style={{ width: "25vw" }} className="paginationbox">
              <div>
                <ArrowBackIosIcon
                  style={{ fontSize: "1.5vw" }}
                  onClick={() => {
                    if (page - 1 > 0) {
                      setPage(page - 1);
                    }
                  }}
                />
              </div>

              <div
                hidden={page - 4 > 0 ? false : true}
                onClick={() => setPage(page - 4)}
              >
                {page - 4}
              </div>
              <div
                hidden={page - 3 > 0 ? false : true}
                onClick={() => setPage(page - 3)}
              >
                {page - 3}
              </div>
              <div
                hidden={page - 2 > 0 ? false : true}
                onClick={() => setPage(page - 2)}
              >
                {page - 2}
              </div>
              <div
                hidden={page - 1 > 0 ? false : true}
                onClick={() => setPage(page - 1)}
              >
                {page - 1}
              </div>
              <div style={{ color: "#2A6599" }}>{page}</div>
              <div onClick={() => setPage(page + 1)}>{page + 1}</div>
              <div onClick={() => setPage(page + 2)}>{page + 2}</div>
              <div onClick={() => setPage(page + 3)}>{page + 3}</div>

              <div>
                <ArrowForwardIosIcon
                  style={{ fontSize: "1.5vw" }}
                  onClick={() => {
                    setPage(page + 1);
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {togglrbar === 2 && (
          <div style={{ marginTop: "2vw" }}>
            <div
              style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
              className="navoftableblogs"
            >
              <div style={{ width: "5vw" }}>Id</div>
              <div style={{ width: "40vw" }}>Title Name</div>

              <div style={{ width: "4vw" }}></div>
              <div style={{ width: "4vw" }}></div>
            </div>
            {allCtitle?.length > 0 &&
              allCtitle?.map((data, index) => {
                return (
                  <BlogTitleNAme
                    data={data}
                    index={index}
                    setAllCtitle={setAllCtitle}
                  />
                );
              })}
          </div>
        )}

        {togglrbar === 3 && (
          <div style={{ marginTop: "2vw" }}>
            <div
              style={{ margin: "0vw 1vw", padding: "0vw 1vw" }}
              className="navoftableblogs"
            >
              <div style={{ width: "5vw" }}>Id</div>
              <div style={{ width: "40vw" }}>Button Name</div>

              <div style={{ width: "4vw" }}></div>
              <div style={{ width: "4vw" }}></div>
            </div>
            {allCbutton?.length > 0 &&
              allCbutton?.map((data, index) => {
                return (
                  <BlogButtonName
                    data={data}
                    index={index}
                    setAllCbutton={setAllCbutton}
                  />
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
