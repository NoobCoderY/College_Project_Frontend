import React, { useEffect, useState } from "react";
import "./BiddingFormDashboard.css";
import { useNavigate } from "react-router";

import "../ProductDetailPage/ProductDetail.css";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";

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

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [imagetitle, setimagetitle] = useState("");
  const [open, setOpen] = React.useState(false);
  const [imageTagAlt, setImageTagAlt] = useState("");
  const [metaTag, setMetaTag] = useState("");

  const handlesumbitBlog = () => {
    const formdata = new FormData();
    

    formdata.append("name", title);
    formdata.append("email", imagetitle);
    formdata.append("address", imageTagAlt);
    formdata.append("pin", metaTag);
    var object = {};
formdata.forEach(function(value, key){
    object[key] = value;
});
var json = JSON.stringify(object);
console.log(json);

    axios
      .post(`${API_HOST}/admin/createbin`, json, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        navigate("/dashbaord/bins");
      })
      .catch((err) => {
        setFirstsumbitblog(false);
      });
  };

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
            <div className="jobpodtedfieldtitile mt-2">name</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile">email</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={imagetitle}
                onChange={(e) => {
                  setimagetitle(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile ">address</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={imageTagAlt}
                onChange={(e) => {
                  setImageTagAlt(e.target.value);
                }}
              />
            </div>
            <div className="jobpodtedfieldtitile mt-4">pin</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                value={metaTag}
                onChange={(e) => {
                  setMetaTag(e.target.value);
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

              <button onClick={handlesumbitBlog} style={{ color: "white" }}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
