import React, { useEffect, useState } from "react";
import "./Category.css";
import { SearchSharp } from "@mui/icons-material";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import API_HOST from "../../../env";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import Modal from "@mui/material/Modal";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import img1 from "../../../assets/Jobs/Iconly-Light-Delete.svg";
import Skillpopupcopy from "./Skillpopupcopy";

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
export default function Users() {
  const [toggler, setToggler] = useState(1);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [page1, setPage1] = useState(1);

  const [setSelectedCategory1, setSetSelectedCategory1] = useState("");

  const [allusers1, setAllusers1] = useState([]);

  const [recall1, setRecall1] = useState(false);
  const [selecteddelete1, setSelecteddelete1] = useState([]);
  const [sort, setSort] = useState("alphabetical");
  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=20&pageNumber=${page1}&category=${setSelectedCategory1}&${sort}=true`
      )
      .then((res) => {
        setAllusers1(res?.data?.success?.data);
        window.scrollTo(0, 0, { behavior: "smooth" });
      });
  }, [page1, setSelectedCategory1, recall1, sort]);

  const handleDelete1 = () => {
    const formdata = new FormData();
    formdata.append("removable", JSON.stringify(selecteddelete1));
    console.log(JSON.stringify(selecteddelete1));
    axios
      .post(`${API_HOST}/theCategory/removeCategory`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setSelecteddelete1([]);
        handleClose3();
        setRecall1(!recall1);
      });
  };

  return (
    <div className="BrowseWorkMain-cntainer">
      <div
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          height: "4vw",
          marginBottom: "1vw",
        }}
        className="searchboxcontainer"
      >
        <div
          style={{ height: "3vw", paddingRight: "0.3vw" }}
          className="serachjobbox"
        >
          <span>
            <SearchSharp style={{ fontSize: "1.7vw" }} />
          </span>
          <input
            type="text"
            placeholder={"search Category"}
            value={setSelectedCategory1}
            onChange={(e) => {
              setSetSelectedCategory1(e.target.value);
            }}
          />
          <button
            style={{ width: "11vw", height: "2.3vw" }}
            className="hb-button"
          >
            Search
          </button>
        </div>
        <div style={{ width: "5vw", height: "2vw" }}>
          <img
            onClick={() => {
              if (toggler === 1 && selecteddelete1.length > 0) {
                handleOpen3();
              }
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
      </div>

      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle">Delete Category</div>
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
            Are you really want to delete these ' Categories '
          </div>

          <hr style={{ color: "#00000090" }} />
          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
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
                handleDelete1();
              }}
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
            >
              Delete
            </div>
          </div>
        </Box>
      </Modal>
      {toggler === 1 && (
        <div className="ScrollTable">
          <div
            style={{ margin: "0vw 1vw", padding: "0vw 1vw", width: "80vw" }}
            className="navoftableblogs"
          >
            <div style={{ width: "3vw" }}></div>
            <div style={{ width: "6vw" }}>Id</div>
            <div style={{ width: "20vw" }}>
              Category{" "}
              <span
                onClick={() => {
                  setSort("alphabetical");
                }}
              >
                {sort === "alphabetical" ? (
                  <UnfoldLessIcon
                    style={{
                      width: "2vw",
                      cursor: "pointer",
                      color: "#0052CC",
                    }}
                  />
                ) : (
                  <UnfoldMoreIcon style={{ width: "2vw", cursor: "pointer" }} />
                )}
              </span>{" "}
            </div>
            <div style={{ width: "9vw" }}>
              Jobs Count{" "}
              <span
                onClick={() => {
                  setSort("usedInjobs");
                }}
              >
                {sort === "usedInjobs" ? (
                  <UnfoldLessIcon
                    style={{
                      width: "2vw",
                      cursor: "pointer",
                      color: "#0052CC",
                    }}
                  />
                ) : (
                  <UnfoldMoreIcon style={{ width: "2vw", cursor: "pointer" }} />
                )}
              </span>
            </div>
            <div style={{ width: "13vw" }}>
              Catalogues Count{" "}
              <span
                onClick={() => {
                  setSort("usedIncatalogues");
                }}
              >
                {sort === "usedIncatalogues" ? (
                  <UnfoldLessIcon
                    style={{
                      width: "2vw",
                      cursor: "pointer",
                      color: "#0052CC",
                    }}
                  />
                ) : (
                  <UnfoldMoreIcon style={{ width: "2vw", cursor: "pointer" }} />
                )}{" "}
              </span>{" "}
            </div>
            <div style={{ width: "18vw" }}>
              Popular category
              <span
                onClick={() => {
                  setSort("popularCategory");
                }}
              >
                {sort === "popularCategory" ? (
                  <UnfoldLessIcon
                    style={{
                      width: "2vw",
                      cursor: "pointer",
                      color: "#0052CC",
                    }}
                  />
                ) : (
                  <UnfoldMoreIcon style={{ width: "2vw", cursor: "pointer" }} />
                )}{" "}
              </span>{" "}
            </div>

            <div style={{ width: "7vw" }}>Created on </div>
          </div>
          {allusers1?.length > 0 &&
            allusers1?.map((data, index) => {
              return (
                <Skillpopupcopy
                  data={data}
                  index={index}
                  page={page1}
                  setSelecteddelete={setSelecteddelete1}
                  selecteddelete={selecteddelete1}
                  setRecall={setRecall1}
                  recall={recall1}
                />
              );
            })}

          <div style={{ width: "25vw" }} className="paginationbox">
            <div
              onClick={() => {
                if (page1 > 1) {
                  setPage1(page1 - 1);
                }
              }}
            >
              <ArrowBackIosIcon
                style={{ fontSize: "1.5vw" }}
                onClick={() => {
                  if (page1 - 1 > 0) {
                    setPage1(page1 - 1);
                  }
                }}
              />
            </div>

            <div
              hidden={page1 - 4 > 0 ? false : true}
              onClick={() => setPage1(page1 - 4)}
            >
              {page1 - 4}
            </div>
            <div
              hidden={page1 - 3 > 0 ? false : true}
              onClick={() => setPage1(page1 - 3)}
            >
              {page1 - 3}
            </div>
            <div
              hidden={page1 - 2 > 0 ? false : true}
              onClick={() => setPage1(page1 - 2)}
            >
              {page1 - 2}
            </div>
            <div
              hidden={page1 - 1 > 0 ? false : true}
              onClick={() => setPage1(page1 - 1)}
            >
              {page1 - 1}
            </div>
            <div style={{ color: "#2A6599" }}>{page1}</div>
            <div onClick={() => setPage1(page1 + 1)}>{page1 + 1}</div>
            <div onClick={() => setPage1(page1 + 2)}>{page1 + 2}</div>
            <div onClick={() => setPage1(page1 + 3)}>{page1 + 3}</div>

            <div onClick={() => setPage1(page1 + 1)}>
              <ArrowForwardIosIcon
                style={{ fontSize: "1.5vw" }}
                onClick={() => {
                  setPage1(page1 + 1);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
