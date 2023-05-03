import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";
import API_HOST from "../../../env";
import TextEditor from "./Texteditor";
import { useNavigate, useParams } from "react-router";

export default function AddCategory({ handleClose, setSelectedCategory }) {
  const [name, setName] = useState();

  const [doneSaved, setDoneSaved] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();
  const [desc, setDesc] = useState("");
  const [titileError, setTitileError] = useState("");

  const handlecategory = () => {
    if (!name) {
      if (!name) {
        setTitileError("please Enter Category");
      }

      return;
    } else {
      const formdata = new FormData();
      formdata.append("category", name);
      formdata.append(`categoryId`, id);
      formdata.append("description", desc);

      axios
        .post(`${API_HOST}/theCategory/editCategory`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          console.log(res);
          setDoneSaved(true);
        })
        .catch(() => {
          setTitileError("Category Already exist");
        });
    }
  };

  useEffect(() => {
    if (doneSaved) {
      setTimeout(() => {
        setDoneSaved(false);
       
      }, 3000);
    }
  }, [doneSaved]);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=20&pageNumber=1&categoryId=${id}`
      )
      .then((res) => {
          setName(res?.data?.success?.data[0]?.category)
          setDesc(res?.data?.success?.data[0]?.description)
      });
  }, [id]);

  return (
    <div style={{ height: "calc(100vh - 4vw)" }} className="ScrollTable">
    <div
      style={{
        height: "fit-content",
        justifyContent: "center",
        width: "73vw",
      }}
      className="home-postjob-container"
    >
      <div
        style={{
          overflowX: "hidden",
          paddingBottom: "3vw",
          width: "73vw",
          margin: "2vw",
          paddingTop: "2vw",
          marginTop: "2vw",
        }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">Edit Category </div>

        <div>
          <div className="jobpodtedfieldtitile">Category Name *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setTitileError();
              }}
              placeholder="Category Name"
            />
            <CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.1vw",
                fontSize: "1.5vw",
                cursor: "pointer",
              }}
              onClick={() => {
                setName("");
              }}
            />
          </div>
          <p style={{ color: "red", fontSize: "0.91vw" }}>{titileError}</p>

          <div className="jobpodtedfieldtitile">Information *</div>
          <div className="jobpostfieldinputbox">
            <div style={{ margin: "0vw 0vw 1vw 0vw" }}>
              <TextEditor
                width={"64vw"}
                setShortdesc={setDesc}
                shortdesc={desc}
              />
            </div>
          </div>

          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
            <div
              style={{
                background: "white",
                color: "#0052CC",
                cursor: "pointer",
                border: "1px solid #0052CC",
                margin: "1vw",
                marginBottom: "0vw",
              }}
              className="handlecirclieaboutsave"
              onClick={() => navigate("/dashbaord/category")}
            >
              Cancel
            </div>
            <div
              style={{
                background: "white",
                color: "#0052CC",
                cursor: "pointer",
                border: "1px solid #0052CC",
                margin: "1vw",
                marginBottom: "0vw",
              }}
              className="handlecirclieaboutsave"
            >
              Reset
            </div>
            <div
              onClick={() => handlecategory()}
              style={{
                cursor: "pointer",
                marginRight: "1vw",
                background: doneSaved ? "green" : "",
              }}
              className="handlecirclieaboutsave"
            >
              {doneSaved ? "Saved" : "Submit"}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
