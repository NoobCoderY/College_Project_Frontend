import React, { useEffect, useState } from "react";
import axios from "axios";
import API_HOST from "../../../env";
import { useNavigate } from "react-router";

import img3 from "../../../assets/Web 1280 – 14/Group 9831.svg";
import img from "../../../assets/Web 1280 – 14/Icon.svg";

import imageCompression from "browser-image-compression";
import Texteditor from "../AddFAQ/Texteditor";

export default function AddStory() {
  const [name, setName] = useState();
  const width = 1000;
  const [doneSaved, setDoneSaved] = useState(false);

  const navigate = useNavigate();

  const [titileError, setTitileError] = useState("");

  const [ans, setAns] = useState("");

  const handlecategory = () => {
    const formdata = new FormData();
    formdata.append("heading", name);
    formdata.append("content", ans);
    iamge && formdata?.append("image", iamge);
    axios
      .post(`${API_HOST}/stories/addStory`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res);
        setDoneSaved(true);
      })
      .catch(() => {
        setTitileError("Story already exist");
      });
  };

  useEffect(() => {
    if (doneSaved) {
      setTimeout(() => {
        setDoneSaved(false);
        setName("");
        setAns("");
        setIamge();
        navigate("/dashbaord/story")
      }, 2000);
    }
  }, [doneSaved]);

  const [iamge, setIamge] = useState();

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
      await setIamge(new File([compressedFile], `${compressedFile?.name}`));
    } catch (error) {
      console.log(error);
    }
  }

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
          <div className="jobpostedformheading">Add Story </div>

          <div>
            <div className="jobpodtedfieldtitile">Story Title</div>
            <div className="jobpostfieldinputbox">
              <input
                type="text"
                name="title"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setTitileError();
                }}
                placeholder="Story heading"
              />
            </div>
            <p style={{ color: "red", fontSize: "0.91vw" }}>{titileError}</p>
            <div className="jobpodtedfieldtitile">Story Content</div>
            <div style={{ margin: "1vw 0vw", marginRight: "4vw" }}>
              <Texteditor shortdesc={ans} setShortdesc={setAns} />
            </div>

            <div className="jobpodtedfieldtitile">Story image</div>
            <div
              style={{
                width: width > 700 ? "95%" : "95%",
                height: width > 700 ? "10vw" : "20vw",
                marginTop: "1vw",
              }}
              className="inputfilebox"
            >
              <div>
                <label htmlFor="inputctaelogfile">
                  <div className="inputicon">
                    <img src={img} alt="" />
                  </div>
                  <div className="inputcateaddformfile">
                    Drag and Drop ,Browse to upload Story image Image
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
            {iamge ? (
              <div className="inputfilesshowncatboxsingle">
                <div className="inputfilesshowncatboxsingleimg">
                  <img
                    style={{ width: width > 700 ? "" : "5vw" }}
                    src={img3}
                    alt=""
                  />
                </div>
                <div className="fileselctednamecate">
                  {iamge?.name.slice(0, 50)}
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              style={{ marginTop: "0.31vw" }}
              className="handlemoreaboutskill"
            >
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
