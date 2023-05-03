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

import Skillpopupcopy from "./Skillpopupcopy";

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

export default function Directbuy2({ width }) {
  const { user } = useSelector((state) => state.user);

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
          `${API_HOST}/carts/allCart?pageSize=11&pageNumber=${page}${`&search=${setSelectedCategory}`}${
            selectedbiddingvalue ? `&finalAmount=${selectedbiddingvalue}` : ""
          }${`&address=${studyset}`}${Cateid ? `&category=${Cateid}` : ""}${
            sort ? `&${sort}=true` : ""
          }
          `,
          {
            headers: {
              Authorization:
                "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((res) => {
          setAllusers(res.data?.success?.data);
        });
    }
  }, [page, setSelectedCategory, recall, user]);
  return (
    <div style={{ paddingTop: "1vw" }} className="BrowseWorkMain-cntainer">
    
      <div
        style={{
          overflowX: "scroll",
          width: "92vw",
          height: "calc(100vh - 4vw)",
        }}
        className="ScrollTable"
      >
        <div
          style={{
            margin: "0vw 0vw",
            padding: "0vw 1vw",
            width: width > 700 ? "80vw" : "192vw",
            marginTop :width>700 && '0.61vw'
          }}
          className="navoftableblogs"
        >
          <div style={{ width: width > 700 ? "15vw" : "30vw" }}>Website</div>
          <div style={{ width: width > 700 ? "11vw" : "50vw" }}>
            Buyer Name
            <span
              onClick={() => {
                setSort("buyerName");
              }}
            ></span>{" "}
          </div>
          <div style={{ width: width > 700 ? "9.5vw" : "50vw" }}>
            Buyer Mobile
            <span
              onClick={() => {
                setSort("buyerName");
              }}
            ></span>{" "}
          </div>
          <div style={{ width: width > 700 ? "17.5vw" : "50vw" }}>
            Buyer Email
            <span
              onClick={() => {
                setSort("buyerName");
              }}
            ></span>{" "}
          </div>

          <div style={{ width: width > 700 ? "14vw" : "40vw" }}>
            Total Amount
            <span
              onClick={() => {
                setSort("grandTotal");
              }}
            ></span>{" "}
          </div>

          <div style={{ width: width > 700 ? "8vw" : "30vw" }}>
            Order On <span></span>
          </div>

          <div style={{ width: width > 700 ? "8vw" : "15vw" }}> Status </div>
        </div>
        {allusers?.length > 0 &&
          allusers?.map((data, index) => {
            return (
              <Skillpopupcopy
                width={width}
                data={data}
                index={index}
                page={page}
                setRecall={setRecall}
                recall={recall}
              />
            );
          })}

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
      </div>
    </div>
  );
}
