import React, { useEffect, useState } from "react";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import imgfilter from "../../../assets/walletimage/Iconly-Light-Color-Filter.svg";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import ProfileCatelogdetails from "./ProfileCatelogDetails";

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
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: "2vw",
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 1,
};

export default function BookCatalogues({ width }) {
  const { user } = useSelector((state) => state.user);
  const [workhistorytoggle, setWorkhistorytoggle] = useState(1);

  const [page, setPage] = useState(1);

  const [setSelectedCategory, setSetSelectedCategory] = useState("");

  const classes = useStyles();
  const [degreeset, setDegreeset] = useState("");
  const [arrayoflongdegree, setArrayoflongdegree] = useState();
  const [searchCategorysearch, setSearchCategorysearch] = useState("");
  const [Cateid, setCateid] = useState("");
  const [prevCateid, setprevCateid] = useState("");

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=50&pageNumber=1&category=${searchCategorysearch}`
      )
      .then((res) => {
        setArrayoflongdegree(res?.data?.success?.data);
      });
  }, [searchCategorysearch]);

  const [selectedbiddingvalue, setSelectedbiddingvalue] = useState("");
  const [prevselectedbiddingvalue, setprevSelectedbiddingvalue] = useState("");

  const [studyset, setstudyset] = useState("");
  const [studyset1, setstudyset1] = useState("");

  const [anchorElx2, setAnchorElx2] = React.useState(null);
  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };
  const handleClosex2 = () => {
    setAnchorElx2(null);
  };
  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [allusers, setAllusers] = useState([]);

  const [recall, setRecall] = useState(false);

  const [prevsort, setPrevsort] = useState("created_at");
  const [sort, setSort] = useState("created_at");

  useEffect(() => {
    if (user?.userName) {
      axios
        .get(
          `${API_HOST}/webmodel/viewDirectbuy?pageSize=12&pageNumber=${page}${`&search=${setSelectedCategory}`}${
            selectedbiddingvalue ? `&costPrice=${selectedbiddingvalue}` : ""
          }${`&location=${studyset}`}${Cateid ? `&category=${Cateid}` : ""}${
            sort ? `&${sort}=true` : ""
          }
        `
        )
        .then((res) => {
          setAllusers(res.data?.success?.data);
        });
    }
  }, [page, setSelectedCategory, recall, user]);

  return (
    <div className="BrowseWorkMain-cntainer">
     
      <div
        style={{ alignItems: "center", justifyContent: "flex-start" }}
        className="searchboxcontainer"
      >
        <div className="serachjobbox">
          <span>
            <SearchSharp style={{ fontSize: width > 700 ? "1.7vw" : "5vw" }} />
          </span>
          <input
            type="text"
            placeholder={"search  Catalogue and Book"}
            value={setSelectedCategory}
            onChange={(e) => {
              setSetSelectedCategory(e.target.value);
            }}
          />
        </div>
        <div>
          <div
            style={{
              flexWrap: "wrap",
              marginTop: width > 700 ? "0vw" : "1vw",
              marginBottom: "0vw",
              paddingBottom: "0.5vw",
              paddingTop: "0vw",
            }}
            className="filterboxflex"
          >
            <div
              onClick={() => {
                handleOpen();
              }}
              className="filtericonbox"
            >
              <img src={imgfilter} alt="" /> {width > 700 && "Filter"}
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={width > 700 ? style : style1}>
                <div
                  style={{
                    maxHeight: "80vh",
                    overflow: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  <div className="profiletitleandmenunav">
                    <div className="profiledetailstitle">Add Filters</div>
                    <div className="profiledetailnavmanu">
                      <div>
                        <CloseIcon
                          onClick={handleClose}
                          style={{
                            fontSize: width > 700 ? "1.5vw" : "4vw",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <hr style={{ color: "#000000" }} />
                  <div className="jobpodtedfieldtitile"> Select Category </div>

                  <div
                    style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                    className="loginfield"
                    onClick={handleClickx2}
                  >
                    <TextField
                      id="outlined-basic"
                      label="Category "
                      variant="outlined"
                      disabled
                      value={degreeset}
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
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    />
                    <span style={{ width: "0.1vw" }}>
                      <KeyboardArrowDownOutlined
                        style={{
                          fontSize: width > 700 ? "1.5vw" : "5vw",
                          position: "relative",
                          right: width > 700 ? "2vw" : "6vw",
                          top: width > 700 ? "1vw" : "3vw",
                        }}
                      />
                    </span>
                  </div>

                  <Popover
                    id={idx2}
                    open={openx2}
                    anchorEl={anchorElx2}
                    onClose={handleClosex2}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <div
                      style={{
                        maxHeight: width > 700 ? "18vw" : "40vw",
                        overflow: "scroll",
                        width: width > 700 ? "44vw" : "83vw",
                      }}
                    >
                      <Typography
                        sx={{
                          p: 1,
                          pl: 1,
                          ml: 1,
                          pr: 0,
                          mt: "0vw !important",
                          width: width > 700 ? "43vw" : "80vw",
                          position: "fixed",
                          background: "white",
                          zIndex: "10",
                        }}
                      >
                        <input
                          placeholder="search here .."
                          onChange={(e) => {
                            setSearchCategorysearch(e.target.value);
                          }}
                          style={{
                            width: "97%",
                            border: "1.5px solid #00000050",
                            outline: "none",
                            height: "2.5",
                            borderRadius: "0.21vw",
                          }}
                        />
                      </Typography>
                      <Typography
                        sx={{
                          p: 2.5,
                          pl: 1,
                          ml: 1,
                          width: "95%",
                          cursor: "pointer",
                        }}
                      ></Typography>

                      {arrayoflongdegree?.length > 0 &&
                        arrayoflongdegree.map((data, index) => {
                          return (
                            <Typography
                              sx={{
                                p: 0.51,
                                pl: 1,
                                ml: 1,
                                width: "95%",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setDegreeset(data?.category);
                                setprevCateid(data?._id);
                                handleClosex2();
                              }}
                            >
                              {data?.category}
                            </Typography>
                          );
                        })}
                    </div>
                  </Popover>

                  <div className="jobpodtedfieldtitile">Budget Value </div>

                  <div>
                    <div
                      style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                      className="loginfield"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Budget(Rs.)"
                        type="number"
                        variant="outlined"
                        value={prevselectedbiddingvalue}
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
                        onChange={(e) =>
                          setprevSelectedbiddingvalue(e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="jobpodtedfieldtitile"> Select Location </div>

                  <div>
                    <div
                      style={{ left: "0vw", width: "98%", marginLeft: "0%" }}
                      className="loginfield"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Location"
                        variant="outlined"
                        value={studyset1}
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
                        onChange={(e) => {
                          setstudyset1(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="jobpodtedfieldtitile">Sort by</div>

                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      onClick={() => setPrevsort("cost")}
                      type="checkbox"
                      name=""
                      id=""
                      style={{ margin: "0 1vw" }}
                      checked={prevsort === "cost" ? true : false}
                    />
                    <span className="jobpodtedfieldtitile">Price</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      onClick={() => setPrevsort("abc")}
                      type="checkbox"
                      name=""
                      id=""
                      style={{ margin: "0 1vw" }}
                      checked={prevsort === "abc" ? true : false}
                    />
                    <span className="jobpodtedfieldtitile">Alphabet</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      onClick={() => setPrevsort("created_at")}
                      type="checkbox"
                      name=""
                      id=""
                      style={{ margin: "0 1vw" }}
                      checked={prevsort === "created_at" ? true : false}
                    />
                    <span className="jobpodtedfieldtitile">
                      Date ( Recent )
                    </span>
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
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Cancel
                    </div>

                    <div
                      style={{
                        background: "white",
                        color: "black",
                        cursor: "pointer",
                      }}
                      className="handlecirclieaboutsave"
                      onClick={() => {
                        setCateid();
                        setstudyset("");
                        setSelectedbiddingvalue("");

                        setprevCateid();
                        setstudyset1("");
                        setprevSelectedbiddingvalue("");
                        setDegreeset("");
                        setPrevsort('created_at');
                        setSort(false);
                      }}
                    >
                      Reset
                    </div>

                    <div
                      style={{ cursor: "pointer" }}
                      className="handlecirclieaboutsave"
                      onClick={() => {
                        setCateid(prevCateid);

                        setstudyset(studyset1);
                        setSelectedbiddingvalue(prevselectedbiddingvalue);

                        setSort(prevsort);
                        handleClose();
                        setRecall(!recall);
                      }}
                    >
                      Submit
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>

            {width > 700 && (
              <div
                onClick={() => {
                  setCateid();
                  setstudyset("");
                  setSelectedbiddingvalue("");
                  handleClose();

                  setprevCateid();
                  setstudyset1("");
                  setprevSelectedbiddingvalue("");

                  setDegreeset("");
                  setPrevsort('created_at');
                  setSort('created_at');
                  setRecall(!recall);
                }}
                style={{ cursor: "pointer" }}
                className="filtericonboxname"
              >
                Clear all
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="ScrollTable">
        {workhistorytoggle === 1 ? (
          <>
            <div className="catalogcontainerdashbaord">
              {allusers?.length > 0 ? (
                allusers?.map((data, index) => {
                  return (
                    <ProfileCatelogdetails
                      data={data}
                      width={width}
                      recall={recall}
                      setRecall={setRecall}
                    />
                  );
                })
              ) : (
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    textAlign: "center",
                    width: "100%",
                    marginTop: "2vw",
                  }}
                >
                  There are no Catalogue similar to your search .{" "}
                </div>
              )}
            </div>

            <div
              style={{ width: width > 700 ? "25vw" : "90vw" }}
              className="paginationbox"
            >
              <div>
                <ArrowBackIosIcon
                  style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}   onClick={() => {
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
                  style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                  onClick={() => {
                    setPage(page + 1);
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
