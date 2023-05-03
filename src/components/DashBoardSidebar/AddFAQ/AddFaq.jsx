import React, { useEffect, useState } from "react";
import axios from "axios";
import API_HOST from "../../../env";
import { useNavigate } from "react-router";
import TextEditor from "./Texteditor";
export default function AddFaq() {
  const [name, setName] = useState();

  const [doneSaved, setDoneSaved] = useState(false);

  const navigate = useNavigate();

  const [titileError, setTitileError] = useState("");
  const [imageError, setimageError] = useState("");
  const [ans, setAns] = useState("");
  const handlecategory = () => {
    if (!name || !ans) {
      if (!name) {
        setTitileError("please type question");
      }
      if (!ans) {
        setimageError("please type answer");
      }
      return;
    } else {
      const formdata = new FormData();
      formdata.append("question", name);
      formdata.append("answer", ans);
      axios
        .post(`${API_HOST}/faq/addFAQ`, formdata, {
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
          setTitileError("FAQ Already exist");
        });
    }
  };

  useEffect(() => {
    if (doneSaved) {
      setTimeout(() => {
        setDoneSaved(false);
        setName("");
        setAns("");
      }, 3000);
    }
  }, [doneSaved]);

  return (
    <div style={{ height: "calc(100vh - 4vw)" }} className="ScrollTable">
    <div
      style={{
        height: "fit-content",
        justifyContent: "center",
        width: "80vw",
        paddingLeft: "2vw",
      }}
      className="home-postjob-container"
    >
      <div
        style={{
          overflowX: "hidden",
          paddingBottom: "3vw",
          width: "80vw",
          margin: "2vw",
          paddingTop: "2vw",
          marginTop: "2vw",
        }}
        className="homepostjob-right projectAddbar"
      >
        <div className="jobpostedformheading">Add FAQ </div>

        <div>
          <div className="jobpodtedfieldtitile">FAQ Question *</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              name="title"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setTitileError();
              }}
              placeholder="FAQ Question"
            />
          </div>
          <p style={{ color: "red", fontSize: "0.91vw" }}>{titileError}</p>
          <div className="jobpodtedfieldtitile">FAQ Answer *</div>
          <div style={{ marginRight: "4vw" }}>
            <TextEditor shortdesc={ans} setShortdesc={setAns} />
          </div>

          <p style={{ color: "red", fontSize: "0.91vw" }}>{imageError}</p>
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
